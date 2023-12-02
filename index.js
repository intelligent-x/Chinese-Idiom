const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const DATABASE = {
    "白驹过隙": "比喻时间过的很快。",
    "百里挑一": "形容十分出众。",
    "半青半黄": "比喻时机还没有成熟。也比喻其他事物或思想未达到成熟阶段",
    "杯弓蛇影": "比喻因疑神疑鬼而引起恐惧",
    "别无长物": "原指生活简朴。现形容贫穷。",
    "不孚众望": "不能使大家信服。",
    "不绝如缕": "形容局势危急或声音细微悠长。",
    "不刊之论": "比喻不能改动或不可磨灭的言论。",
    "不可理喻": "指无法用道理使之明白。",
    "不名一文": "形容极其贫穷。",
    "不忍卒读": "形容文章内容悲惨动人。",
    "不瘟不火": "指戏曲不沉闷乏味，也不急促。",
    "不学无术": "指没有学问，没有本领。",
    "不易之论": "完全正确、不可更改的言论。",
    "不赞一词": "原指文章写的很好，别人不能再添一句话。现也指一言不发。",
    "不知所云": "指说话者语言紊乱或空洞。用于说话人，不用于听话人。",
    "不足为训": "不值得作为效仿的准则、典范。",
    "惨淡经营": "指下笔之前竭力劳神构思。也指苦心谋划、经营（某事）。",
    "侧目而视": "形容憎恨或又怕又愤恨。",
    "差强人意": "大体上还能使人满意。",
    "出神入化": "形容技艺达到了绝妙的境界",
    "从长计议": "对事情慎重地考虑，不急于作决定。",
    "从善如流": "形容能迅速地接受别人的好意见。",
    "大而化之": "形容做事情不小心谨慎。",
    "大方之家": "指见识广博或学有专长的人。",
    "箪食壶浆": "形容军队受到群众拥护和欢迎的情况。",
    "当场出彩": "比喻当着众人的面败露秘密或显出丑态。",
    "登高自卑": "比喻做事情要循序渐进，由浅入深。",
    "登堂入室": "比喻学问或技能从浅到深，循序渐进，达到很高的水平。",
    "豆蔻年华": "指女子十三四岁的年纪。",
    "耳提面命": "形容恳切教导。",
    "犯而不校": "别人触犯了自己也不计较。",
    "飞短流长": "指散播谣言，中伤他人。",
    "付之一笑": "比喻不计较，不当一回事。",
    "付诸东流": "比喻希望落空，成果丧失，前功尽弃。",
    "瓜田李下": "比喻容易引起嫌疑的场合。",
    "果不其然": "果然如此。",
    "裹足不前": "形容有所顾虑而止步不敢向前。",
    "海外奇谈": "比喻没有根据的、荒唐的言论或传闻。",
    "毫发不爽": "形容细微之处都不会出差错。",
    "好为人师": "形容不谦虚，自以为是，爱摆老资格。贬义词。",
    "河东狮吼": "比喻悍妇发怒。",
    "呼之欲出": "指文学作品中人物的描写十分生动。",
    "毁家纾难": "捐献所有家产，帮助国家减轻困难。",
    "见异思迁": "指意志不坚定，喜爱不专一。",
    "九牛一毛": "表示微不足道。",
    "久假不归": "长期借用而不归还。",
    "具体而微": "形容内容大体具备而规模较小。",
    "侃侃而谈": "形容理直气壮、从容不迫地说话。",
    "慷慨解囊": "形容毫不吝啬地拿出钱来帮助别人。",
    "空谷足音": "比喻极难得到音信、言论或来访。",
    "屡试不爽": "屡次试验都没有差错。",
    "马革裹尸": "形容军人战死沙场的无畏气概。",
    "面目全非": "事物的样子变得很厉害。指变得很糟，贬义。",
    "明日黄花": "比喻过时的事物或消息。",
    "目无全牛": "比喻技术熟练到了得心应手的境地。",
    "七月流火": "指天气逐渐凉爽起来。",
    "期期艾艾": "形容口吃的人吐辞重复，说话不流利。",
    "气冲霄汉": "形容魄力非常大，有大无畏的精神和气节。",
    "翘足而待": "比喻很快就能实现。",
    "轻于鸿毛": "比喻死得不值得。",
    "求全责备": "比喻对人对事苛求完美。",
    "人浮于事": "指工作中人员过多或人多事少。",
    "人满为患": "因人多造成了困难。强调人多的坏处。",
    "三人成虎": "比喻谣言或讹传已在反复，就有使人信以为真的可能。",
    "山穷水尽": "比喻无路可走陷入绝境。",
    "上下其手": "比喻玩弄手法，暗中作弊。",
    "十室九空": "形容因灾荒、战乱和横征暴敛使人民贫困、破产或流亡的悲惨景象。",
    "首当其冲": "比喻首先受到攻击或遭遇灾难。",
    "首鼠两端": "在两者之间犹豫不决又动摇不定。",
    "殊方绝域": "指极远的地方。",
    "顺水推舟": "比喻顺着某个趋势或某种方式说话办事。",
    "随波逐流": "比喻没有主见，跟着别人走。",
    "特立独行": "形容人的志行高洁，不同流俗。",
    "醍醐灌顶": "比喻听了高明的意见使人受到很大启发。也形容清凉舒适。",
    "投桃报李": "报答他人的好处。",
    "退避三舍": "比喻退让和回避，避免冲突。",
    "万人空巷": "形容庆祝、欢迎等盛况。",
    "望其项背": "形容赶得上或比得上。",
    "危言危行": "说正直的话，做正直的事。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

let QUESTIONS = Object.values(DATABASE).slice(60, 80);
const originLength = QUESTIONS.length;


class Asker {
    constructor(element) {
        this.element = element;
    }

    ask = () => {
        if (QUESTIONS.length <= 0) return this.element.innerHTML = '你真棒！';
        this.index = random(0, QUESTIONS.length - 1);
        this.qt = QUESTIONS[this.index];
        this.element.innerHTML = this.qt;
        return this.index;
    }

    afterCheck = bool => {
        if (bool) {
            QUESTIONS.splice(this.index, 1);
        }
    }

    id = processer => {
        this.processer = processer;
    }
}

class Answerer {
    constructor(input, button) {
        this.input = input;
        this.button = button;
        this.initEvent();
    }

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

    answer = (value) => {
        this.input.value = '';
        this.processer.check(value);
    }

    id = processer => {
        this.processer = processer;
    }
}

class Processer {
    constructor(asker, answerer, app) {
        this.asker = asker;
        this.answerer = answerer;

        asker.id(this);
        answerer.id(this);

        this.launch();
    }
    launch = () => {
        this.currentIndex = this.asker.ask();
    }
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

const asker = new Asker(document.querySelector('.question'));
const answerer = new Answerer(document.querySelector('.answer input'), document.querySelector('.answer button'));
const processer = new Processer(asker, answerer);