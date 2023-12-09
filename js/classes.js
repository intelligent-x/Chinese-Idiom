class Asker {
    /**
     * 
     * @param {Node} element 提问器的节点 
     */
    constructor(element) {
        this.element = element;
    }

    /**
     * 显示问题
     * @returns {Number} this.index 返回选中成语的下标
     */
    ask = () => {
        if (QUESTIONS.length <= 0) return this.element.innerHTML = '你真棒！';
        this.index = random(0, QUESTIONS.length - 1);
        this.qt = QUESTIONS[this.index];
        this.element.innerHTML = this.qt;
        return this.index;
    }

    /**
     * 在回答提交后确认答案并对问题单进行删减
     * @param {Boolean} bool 是否答对的布尔值
     */
    afterCheck = bool => {
        if (bool) {
            QUESTIONS.splice(this.index, 1);
        }
    }

    /**
     * 获取对全局数据的处理的处理器对象
     * @param {Object} processer 
     */
    id = processer => {
        this.processer = processer;
    }
}

class Answerer {
    /**
     * 存储输入框和
     * @param {Node} input 
     * @param {Node} button 
     */
    constructor(input, button) {
        this.input = input;
        this.button = button;
        this.initEvent();
    }

    /**
     * 监听点击提交按钮事件
     */
    initEvent = () => {
        this.input.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.answer(e.target.value);
            }
        });
        this.button.addEventListener('click', e => {
            this.answer(this.input.value);
        })
    }

    /**
     * 将提交的值传送给processer
     * @param {String} value 提交的值
     */
    answer = (value) => {
        this.input.value = '';
        this.processer.check(value);
    }

    /**
     * 存储processer
     * @param {Object} processer 
     */
    id = processer => {
        this.processer = processer;
    }
}

class Processer {
    /**
     * 存储
     * @param {Object} asker 提问器 
     * @param {Object} answerer 回答器
     * @param {Node} app 应用界面
     */
    constructor(asker, answerer, app) {
        this.asker = asker;
        this.answerer = answerer;

        asker.id(this);
        answerer.id(this);

        this.launch();
    }

    /**
     * 启动应用
     */
    launch = () => {
        this.currentIndex = this.asker.ask();
    }

    /**
     * 校验答案
     * @param {String} answer 
     */
    check = answer => {
        if (DATABASE[answer] === QUESTIONS[this.currentIndex]) {
            this.asker.afterCheck(true);
            document.querySelector('.cover-true').style.zIndex = 1;
            setTimeout(function () {
                document.querySelector('.cover-true').style.zIndex = -1;
            }, 100)
        } else {
            this.asker.afterCheck(false);

            document.querySelector('.cover-false').style.zIndex = 1;
            setTimeout(function () {
                document.querySelector('.cover-false').style.zIndex = -1;
            }, 100)
        }

        this.launch();
        document.querySelector('.scores').innerHTML = (100 * (1 - QUESTIONS.length / originLength)).toFixed(2) + '%';
    }
}