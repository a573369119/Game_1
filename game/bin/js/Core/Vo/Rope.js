/**
 * 绳子
 */
var Rope = /** @class */ (function () {
    function Rope(dataPos, datacountlength) {
        this.constraints = new Array();
        this.ropecolors = ["rgba(139,69,19)", "rgba(107,48,5)"];
        this.createRopeNode(dataPos, datacountlength);
        this.createConstraint();
        this.countlength = datacountlength;
        this.ropeAlpha = 1;
        this.isRopeMax = false;
        Laya.timer.frameLoop(1, this, this.checkMaxRope, [datacountlength * 25]);
    }
    /**创建绳子节点*/
    Rope.prototype.createRopeNode = function (dataPos, datacountlength) {
        this.rope = Matter.Composites.stack(dataPos.x, dataPos.y, datacountlength, 1, 0, 0, function (x, y) {
            return Matter.Bodies.circle(x, y, 1, { frictionAir: 0.0001, timeScale: 1.25, collisionFilter: { group: -1 }, render: { visible: false } });
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
                length: 20,
                render: { lineWidth: 6, strokeStyle: this.ropecolors[Math.floor(k / 2) % 2] }
            });
            this.constraints.push(constraint1);
        }
        Matter.World.add(GameMediator.engine.world, this.constraints);
    };
    /**判断是否拉到最长*/
    Rope.prototype.checkMaxRope = function (limitDis) {
        var dis = DistanceTool.Distance(this.rope.bodies[this.rope.bodies.length - 1].position.x, this.rope.bodies[0].position.x, this.rope.bodies[this.rope.bodies.length - 1].position.y, this.rope.bodies[0].position.y);
        if (dis >= limitDis) {
            this.ropeMax = Matter.Constraint.create({
                bodyA: this.rope.bodies[0],
                bodyB: this.rope.bodies[this.rope.bodies.length - 1],
                stiffness: 1.2,
                length: limitDis,
                render: { lineWidth: 6, strokeStyle: this.ropecolors[0], visible: true }
            });
            Laya.timer.clear(this, this.checkMaxRope);
            this.isRopeMax = true;
            Matter.World.add(GameMediator.engine.world, this.ropeMax);
        }
    };
    /**检测绳子透明度逐渐消失*/
    Rope.prototype.checkRopeColorMiss = function () {
        this.ropeAlpha -= 0.1;
        for (var i = 0; i < this.constraints.length; i++) {
            if (Math.floor(i / 2) % 2 == 0) {
                this.constraints[i].render.strokeStyle = "rgba(139,69,19," + this.ropeAlpha + ")";
            }
            else {
                this.constraints[i].render.strokeStyle = "rgba(107,48,5," + this.ropeAlpha + ")";
            }
        }
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