// Enhanced Double Pendulum with Physics Simulation and Time Series Plotting

class CircularBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity);
        this.head = 0;
        this.size = 0;
    }
    
    push(item) {
        this.buffer[this.head] = item;
        this.head = (this.head + 1) % this.capacity;
        if (this.size < this.capacity) {
            this.size++;
        }
    }
    
    toArray() {
        const result = [];
        let index = (this.head - this.size + this.capacity) % this.capacity;
        for (let i = 0; i < this.size; i++) {
            result.push(this.buffer[index]);
            index = (index + 1) % this.capacity;
        }
        return result;
    }
}

class EnhancedDoublePendulumPhysics {
    constructor() {
        this.state = this.createInitialState();
        this.animationId = null;
        this.lastTime = null;
        this.isRunning = false;
    }
    
    createInitialState() {
        const initialPhysicsState = {
            ddtheta: {a: 0, b: 0},
            dtheta: {a: 0.1, b: 0.15},
            theta: {a: Math.PI * 0.7, b: Math.PI * 0.4}
        };
        
        return {
            frameIndex: 0,
            currentState: this.withForwardKinematics(initialPhysicsState),
            lowResStates: new CircularBuffer(300),
            medResStates: new CircularBuffer(200),
            highResStates: new CircularBuffer(500)
        };
    }
    
    clamp(x, min, max) {
        return Math.max(min, Math.min(x, max));
    }
    
    mod(n, m) {
        return ((n % m) + m) % m;
    }
    
    fixRange(x) {
        return this.mod(x + Math.PI, 2 * Math.PI) - Math.PI;
    }
    
    withForwardKinematics(physicsState) {
        const l = 15; // rod length
        const c_a = Math.cos(physicsState.theta.a);
        const s_a = Math.sin(physicsState.theta.a);
        const c_b = Math.cos(physicsState.theta.b);
        const s_b = Math.sin(physicsState.theta.b);
        
        const a = {
            x: l * s_a,
            y: -l * c_a,
            dx: c_a * l * physicsState.dtheta.a,
            dy: s_a * l * physicsState.dtheta.a,
            ddx: c_a * l * physicsState.ddtheta.a - s_a * l * physicsState.dtheta.a * physicsState.dtheta.a,
            ddy: s_a * l * physicsState.ddtheta.a + c_a * l * physicsState.dtheta.a * physicsState.dtheta.a,
        };
        
        const b = {
            x: l * s_b + a.x,
            y: -l * c_b + a.y,
            dx: c_b * l * physicsState.dtheta.b + a.dx,
            dy: s_b * l * physicsState.dtheta.b + a.dy,
            ddx: c_b * l * physicsState.ddtheta.b - s_b * l * physicsState.dtheta.b * physicsState.dtheta.b + a.ddx,
            ddy: s_b * l * physicsState.ddtheta.b + c_b * l * physicsState.dtheta.b * physicsState.dtheta.b + a.ddy,
        };
        
        return {...physicsState, a, b};
    }
    
    updatePhysics(dt) {
        let currentState = {...this.state.currentState};
        
        // Physical parameters
        const g = 9.8;
        const m_a = 1;
        const m_b = 1;
        const l_a = 1;
        const l_b = 1;
        
        const a = currentState.theta.a;
        const b = currentState.theta.b;
        const da = currentState.dtheta.a;
        const db = currentState.dtheta.b;
        
        const s_a = Math.sin(a);
        const s_b = Math.sin(b);
        const c_a = Math.cos(a);
        const s_ab = Math.sin(a - b);
        const c_ab = Math.cos(a - b);
        
        const da2 = da * da;
        const db2 = db * db;
        
        // Double pendulum equations of motion
        const dda = (
            m_b * s_ab * c_ab * l_a * da2 +
            m_b * s_ab * l_b * db2 +
            ((m_a + m_b) * s_a - m_b * s_b * c_ab) * g
        ) / (-(m_a + m_b * s_ab * s_ab) * l_a);
        
        const ddb = (
            (m_a + m_b) * s_ab * l_a * da2 +
            m_b * s_ab * c_ab * l_b * db2 +
            (m_a + m_b) * s_ab * c_a * g
        ) / ((m_a + m_b * s_ab * s_ab) * l_b);
        
        // Integrate accelerations to get new state
        currentState.ddtheta = {a: dda, b: ddb};
        currentState.dtheta = {
            a: da + dda * dt,
            b: db + ddb * dt
        };
        currentState.theta = {
            a: this.fixRange(a + da * dt),
            b: this.fixRange(b + db * dt)
        };
        
        this.state.currentState = this.withForwardKinematics(currentState);
        this.state.frameIndex++;
        
        // Store states at different resolutions for plotting
        this.state.highResStates.push({...this.state.currentState});
        if (this.state.frameIndex % 2 === 0) {
            this.state.medResStates.push({...this.state.currentState});
        }
        if (this.state.frameIndex % 4 === 0) {
            this.state.lowResStates.push({...this.state.currentState});
        }
    }
    
    animate = (currentTime) => {
        if (this.lastTime === null) {
            this.lastTime = currentTime;
        }
        
        const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
        this.lastTime = currentTime;
        
        // Update physics at 60 FPS
        const dt = 1/60;
        this.updatePhysics(dt);
        
        if (this.isRunning) {
            this.animationId = requestAnimationFrame(this.animate);
        }
    }
    
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.animationId = requestAnimationFrame(this.animate);
        }
    }
    
    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

class TimeSeriesCanvas {
    constructor(canvasId, physics) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.physics = physics;
        this.setupCanvas();
    }
    
    setupCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
    }
    
    drawTimeSeries(sequences, colors, title) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw title
        this.ctx.fillStyle = '#333';
        this.ctx.font = '12px monospace';
        this.ctx.fillText(title, 10, 20);
        
        if (!sequences || sequences.length === 0) return;
        
        const padding = 30;
        const plotWidth = this.canvas.width / window.devicePixelRatio - 2 * padding;
        const plotHeight = this.canvas.height / window.devicePixelRatio - 2 * padding;
        
        // Find value range across all sequences
        let minVal = Infinity;
        let maxVal = -Infinity;
        
        sequences.forEach(seq => {
            seq.values.forEach(val => {
                minVal = Math.min(minVal, val);
                maxVal = Math.max(maxVal, val);
            });
        });
        
        if (Math.abs(maxVal - minVal) < 1e-10) {
            maxVal = minVal + 1;
        }
        
        // Draw grid lines
        this.ctx.strokeStyle = '#eee';
        this.ctx.lineWidth = 0.5;
        for (let i = 0; i <= 5; i++) {
            const y = padding + (i / 5) * plotHeight;
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(padding + plotWidth, y);
            this.ctx.stroke();
        }
        
        // Draw each sequence
        sequences.forEach((seq, seqIndex) => {
            if (seq.values.length < 2) return;
            
            this.ctx.strokeStyle = colors[seqIndex % colors.length];
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            
            seq.values.forEach((value, i) => {
                const x = padding + (i / (seq.values.length - 1)) * plotWidth;
                const y = padding + plotHeight - ((value - minVal) / (maxVal - minVal)) * plotHeight;
                
                if (i === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            });
            
            this.ctx.stroke();
        });
        
        // Draw axes
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(padding, padding);
        this.ctx.lineTo(padding, padding + plotHeight);
        this.ctx.lineTo(padding + plotWidth, padding + plotHeight);
        this.ctx.stroke();
        
        // Draw value range labels
        this.ctx.fillStyle = '#666';
        this.ctx.font = '10px monospace';
        this.ctx.fillText(maxVal.toFixed(2), 5, padding + 5);
        this.ctx.fillText(minVal.toFixed(2), 5, padding + plotHeight - 5);
    }
    
    updatePositions() {
        const states = this.physics.state.lowResStates.toArray();
        if (states.length === 0) return;
        
        const sequences = [
            {
                values: states.map(s => s.a.x * 0.02),
                name: 'a.x'
            },
            {
                values: states.map(s => s.a.y * 0.02),
                name: 'a.y'
            },
            {
                values: states.map(s => s.b.x * 0.02),
                name: 'b.x'
            },
            {
                values: states.map(s => s.b.y * 0.02),
                name: 'b.y'
            }
        ];
        
        this.drawTimeSeries(sequences, ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731'], 'Positions over Time');
    }
    
    updateVelocities() {
        const states = this.physics.state.lowResStates.toArray();
        if (states.length === 0) return;
        
        const sequences = [
            {
                values: states.map(s => s.a.dx * 0.005),
                name: 'a.dx'
            },
            {
                values: states.map(s => s.a.dy * 0.005),
                name: 'a.dy'
            },
            {
                values: states.map(s => s.b.dx * 0.005),
                name: 'b.dx'
            },
            {
                values: states.map(s => s.b.dy * 0.005),
                name: 'b.dy'
            }
        ];
        
        this.drawTimeSeries(sequences, ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731'], 'Velocities over Time');
    }
    
    updateAccelerations() {
        const states = this.physics.state.lowResStates.toArray();
        if (states.length === 0) return;
        
        const sequences = [
            {
                values: states.map(s => s.a.ddx * 0.001),
                name: 'a.ddx'
            },
            {
                values: states.map(s => s.a.ddy * 0.001),
                name: 'a.ddy'
            },
            {
                values: states.map(s => s.b.ddx * 0.001),
                name: 'b.ddx'
            },
            {
                values: states.map(s => s.b.ddy * 0.001),
                name: 'b.ddy'
            }
        ];
        
        this.drawTimeSeries(sequences, ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731'], 'Accelerations over Time');
    }
}

// Export for use in HTML
window.EnhancedDoublePendulumPhysics = EnhancedDoublePendulumPhysics;
window.TimeSeriesCanvas = TimeSeriesCanvas;