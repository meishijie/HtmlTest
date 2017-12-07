var StateMachine = require('state-machine');

cc.Class({
    extends: cc.Component,

    properties: {
        bt: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        window.startGame = this.startGame.bind(this);
        this.bt.on('mouseup', function(event) {
            console.log(cc.sys.isNative);
            //window.htmlTo = this.test1.bind(this);

            if (cc.sys.isBrowser) {
                window.htmlTo('里面的文字');
            }
        });


    },

    start() {

    },
    startGame: function() {
            cc.director.loadScene("mainScene");
        }
        // update (dt) {},
});