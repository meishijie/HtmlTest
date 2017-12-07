var StateMachine = require('state-machine');

cc.Class({
    extends: cc.Component,

    properties: {
        fsm: null,
        default: StateMachine
    },
    onLoad() {
        var self = this;
        //状态机
        self.fsm = new StateMachine({
            init: 'solid',
            transitions: [
                { name: 'melt', from: 'solid', to: 'liquid' },
                { name: 'freeze', from: 'liquid', to: 'solid' },
                { name: 'vaporize', from: 'liquid', to: 'gas' },
                { name: 'condense', from: 'gas', to: 'liquid' }
            ],
            methods: {
                onMelt: function() { console.log('I melted') },
                onBeforeMelt: function() {
                    return new Promise(function(resolve, reject) {
                        setTimeout(function() {
                            console.log('当前状态为： ' + self.fsm.state);
                            console.log('能否转变： ' + self.fsm.can('melt'));
                            resolve();
                        }, 3000);

                    })

                },
                onLiquid: function() {
                    console.log(' 马上进入 Liquid');
                    console.log('当前状态为： ' + self.fsm.state);
                },
                onFreeze: function() { console.log('I froze') },
                onVaporize: function() { console.log('I vaporized') },
                onCondense: function() { console.log('I condensed') }
            }
        });

        //console.log('当前状态为： ' + fsm.state);
        self.fsm.melt();
        // console.log('能否转变： ' + fsm.can('melt'));
        // console.log('当前状态为： ' + fsm.state);


    },
    update(dt) {
        // console.log('当前状态为： ' + this.fsm.state);
    }



});