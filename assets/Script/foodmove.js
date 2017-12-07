cc.Class({
    extends: cc.Component,

    properties: {
        x1: 0
            // foo: {
            //     // ATTRIBUTES:
            //     default: null,        // The default value will be used only when the component attaching
            //                           // to a node for the first time
            //     type: cc.SpriteFrame, // optional, default is typeof default
            //     serializable: true,   // optional, default is true
            // },
            // bar: {
            //     get () {
            //         return this._bar;
            //     },
            //     set (value) {
            //         this._bar = value;
            //     }
            // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var finished = cc.callFunc(function(target, node) {
            this.node.destroy();
        }, this, 100); //动作完成后销毁

        // 创建一个移动动作cc.sequence(cc.moveBy(2, cc.p(0, -cc.winSize.height - this.node.height * 2)), cc.fadeOut(1), finished);
        var action = cc.sequence(cc.moveBy(2, cc.p(0, -cc.winSize.height)), finished);
        // 执行动作
        this.node.runAction(action);
    },

    start() {

    },
    update(dt) {

    },
});