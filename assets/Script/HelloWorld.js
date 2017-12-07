cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        bg: {
            default: null,
            type: cc.Sprite
        },
        myscreen: {
            default: null,
            type: cc.Node
        },
        player: {
            default: null,
            type: cc.Node
        },
        spawner: {
            default: null,
            type: cc.Node
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        foods: {
            default: [],
            type: [cc.SpriteFrame] // type 同样写成数组，提高代码可读性
        },
        allfoods: {
            default: [],
            type: cc.Node
        },
        food: {
            default: null,
            type: cc.Prefab
        },
        foodarray: [],
        foodcount: 0

    },

    // use this for initialization
    onLoad: function() {
        cc.director.setDisplayStats(true);
        this.foodarray = ['food1', 'food2'];
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;

        window.test1 = this.test1.bind(this);
        var self = this;
        var anim = this.bg.getComponent(cc.Animation);
        var animState = anim.play('bgAnime');
        // 设置循环模式为 Loop
        animState.wrapMode = cc.WrapMode.Loop;
        this.myscreen.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
            this.player.setPosition(event.getLocationX(), event.getLocationY())
        }, this);
        self.schedule(function() {
            // 这里的 this 指向 component
            self.spawnEnemy();
        }, 1);

        //监听数组元素的删除
        this.node.on('itemDel', function(event) {
            event.stopPropagation();
            // console.log('当前点了 ： ' + event.target.name);
            for (i in self.allfoods) {
                if (self.allfoods[i].name == event.target.name) {
                    console.log('数组中有 ： ' + self.allfoods[i].name);
                    self.allfoods.splice(i, 1); //数组移除元素
                    event.target.destroy(); //删除元素
                    console.log(cc.isValid(event.target));
                }
            }
            // event.getUserData();
        }).bind(this);

    },
    spawnEnemy: function() {
        var afn = cc.find("allfoodnode");
        var ca = cc.find("Canvas");
        // this.spawner.width = cc.winSize.width - 100;
        console.log(cc.winSize.width);
        var w1 = this.spawner.width;
        var y1 = this.spawner.position.y;

        var tempnode = cc.instantiate(this.food);
        //载入数组字符
        var tempI = Math.floor(Math.random() * 2);
        console.log(tempI);
        tempnode.getComponent('food').spText = this.foodarray[tempI];

        tempnode.parent = ca;

        this.foodcount++;

        tempnode.name = String(this.foodcount);
        // tempnode.setPosition(Math.random() * w1, y1);
        tempnode.setPosition(Math.random() * w1 - cc.winSize.width / 2, y1);
        this.allfoods.push(tempnode);

        Global.allfoods = this.allfoods;


    },
    test1: function() {
        console.log('test1成功');
    },

    // called every frame
    update: function(dt) {
        this.spawner.width = cc.winSize.width;
    },
});