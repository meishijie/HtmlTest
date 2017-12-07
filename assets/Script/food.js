cc.Class({
    extends: cc.Component,

    properties: {
        spText: '',
    },

    onLoad() {
        var self = this;
        if (this.spText == '') {
            this.spText = 'food1';
        }
        //载入图片 load the sprite frame of (project/assets/resources/imgs/cocos.png) from resources folder
        cc.loader.loadRes(this.spText, cc.SpriteFrame, function(err, spriteFrame) {
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    },

    start() {

    },
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function(contact, selfCollider, otherCollider) {
        console.log('撞了');
        this.node.dispatchEvent(new cc.Event.EventCustom('itemDel', true));
        // this.node.destroy();
    },
    // update (dt) {},
});