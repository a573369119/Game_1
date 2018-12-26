/**
 * 绳子
 */
var Rope = /** @class */ (function () {
    function Rope(dataPos, datacountlength, datacontact) {
        this.constraints = new Array();
        this.ropecolors = ["rgba(139,69,19)", "rgba(107,48,5)"];
        this.ropeMaxLength = datacountlength * 28;
        this.ropeMinLength = datacountlength * 26;
        this.isContact = datacontact;
        this.createRopeNode(dataPos, datacountlength);
        this.createConstraint();
        this.countlength = datacountlength;
        this.ropeAlpha = 1;
        this.isRopeMax = false;
        this.isRopeContactCandy = false;
        this.isCheck = false;
        Laya.timer.frameLoop(1, this, this.checkMaxRope);
        Laya.timer.frameLoop(1, this, this.checkContact);
    }
    /**创建绳子节点*/
    Rope.prototype.createRopeNode = function (dataPos, datacountlength) {
        this.rope = Matter.Composites.stack(dataPos.x, dataPos.y, datacountlength, 1, 0, 0, function (x, y) {
            return Matter.Bodies.circle(x, y, 1, { frictionAir: 0.0001, collisionFilter: { group: -1 }, render: { visible: false } });
        });
        Matter.World.add(GameMediator.engine.world, this.rope);
    };
    /**创建每一个绳子连接*/
    Rope.prototype.createConstraint = function () {
        for (var k = 0; k < this.rope.bodies.length - 1; k++) {
            var constraint1 = Matter.Constraint.create({
                bodyA: this.rope.bodies[k],
                bodyB: this.rope.bodies[k + 1],
                stiffness: 1,
                damping: 0.1,
                length: 20,
                render: { lineWidth: 6, strokeStyle: this.ropecolors[Math.floor(k / 2) % 2] }
            });
            this.constraints.push(constraint1);
        }
        Matter.World.add(GameMediator.engine.world, this.constraints);
        //创建绳子绷直时的限制
        this.ropeMax = Matter.Constraint.create({
            bodyA: this.rope.bodies[0],
            bodyB: this.rope.bodies[this.rope.bodies.length - 1],
            stiffness: 1.2,
            length: this.ropeMaxLength,
            render: { lineWidth: 6, strokeStyle: this.ropecolors[0], visible: true }
        });
    };
    /**判断是否拉到最长*/
    Rope.prototype.checkMaxRope = function () {
        var dis = DistanceTool.Distance(this.rope.bodies[this.rope.bodies.length - 1].position.x, this.rope.bodies[0].position.x, this.rope.bodies[this.rope.bodies.length - 1].position.y, this.rope.bodies[0].position.y);
        if (dis >= this.ropeMaxLength && this.isCheck) {
            Laya.timer.clear(this, this.checkMaxRope);
            this.isRopeMax = true;
            if (this.isRopeContactCandy == false) {
                this.contactCandy();
                this.isRopeContactCandy = true;
            }
            Matter.World.add(GameMediator.engine.world, this.ropeMax);
            //Laya.timer.frameLoop(1,this,this.checkNotMaxRope);	
        }
    };
    /**判断是否拉到最长*/
    Rope.prototype.checkNotMaxRope = function () {
        var dis = DistanceTool.Distance(this.rope.bodies[this.rope.bodies.length - 1].position.x, this.rope.bodies[0].position.x, this.rope.bodies[this.rope.bodies.length - 1].position.y, this.rope.bodies[0].position.y);
        if (dis < this.ropeMinLength) {
            Laya.timer.clear(this, this.checkNotMaxRope);
            this.isRopeMax = false;
            //Matter.World.remove(GameMediator.engine.world,this.ropeMax);
            Laya.timer.frameLoop(1, this, this.checkNotMaxRope);
            console.log("可以");
        }
    };
    /**检测绳子透明度逐渐消失*/
    Rope.prototype.checkRopeColorMiss = function () {
        //透明度-0.1
        this.ropeAlpha -= 0.1;
        for (var i = 0; i < this.constraints.length; i++) {
            if (Math.floor(i / 2) % 2 == 0) {
                this.constraints[i].render.strokeStyle = "rgba(139,69,19," + this.ropeAlpha + ")";
            }
            else {
                this.constraints[i].render.strokeStyle = "rgba(107,48,5," + this.ropeAlpha + ")";
            }
        }
        //判断透明度是否小于等于0
        if (this.ropeAlpha <= 0) {
            Laya.timer.clear(this, this.checkRopeColorMiss);
            for (var i = 0; i < this.constraints.length; i++) {
                Matter.World.remove(GameMediator.engine.world, this.constraints[i]);
            }
        }
    };
    /**检测绳子与糖果连接状态 */
    Rope.prototype.checkContact = function () {
        this.rope.bodies[this.rope.bodies.length - 1].position.x = GameMediator.candyBody.position.x;
        this.rope.bodies[this.rope.bodies.length - 1].position.y = GameMediator.candyBody.position.y;
    };
    /**连接糖果 */
    Rope.prototype.contactCandy = function () {
        var constraint = Matter.Constraint.create({
            bodyA: this.rope.bodies[this.rope.bodies.length - 1],
            bodyB: GameMediator.candyBody,
            stiffness: 1,
            length: 0.01,
            render: { lineWidth: 6, strokeStyle: "#5C3317" }
        });
        this.constraints.push(constraint);
        Matter.World.add(GameMediator.engine.world, constraint);
    };
    /**更新绳子 */
    Rope.prototype.updateRope = function (dataPos, datacountlength) {
        //透明度回复
        this.ropeAlpha = 1;
        //绳子
        this.constraints = [];
    };
    return Rope;
}());
//# sourceMappingURL=Rope.js.map