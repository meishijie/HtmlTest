cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function(contact, selfCollider, otherCollider) {
        console.log(otherCollider.node.name);

    },

    // update (dt) {},
});