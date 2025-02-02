import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ScenePage } from '../pages/train/scene/scene';
import { AlertPage } from '../pages/train/alert/alert';
import { TourniquetPage } from '../pages/train/massive/tourniquet/tourniquet';
import { WoundpackingPage } from '../pages/train/massive/woundpacking/woundpacking';
import { CirculationPage } from '../pages/train/circulation/circulation';
import { HeadtiltPage } from '../pages/train/airway/headtilt/headtilt';
import { RecoverypositionPage } from '../pages/train/airway/recoveryposition/recoveryposition';
import { SitupPage } from '../pages/train/airway/situp/situp';
import { RespirationPage } from '../pages/train/respiration/respiration';
import { HyperthermiaPage } from '../pages/train/heat/hyperthermia/hyperthermia';
import { HypothermiaPage } from '../pages/train/heat/hypothermia/hypothermia';

@Injectable()
export class RUSProtocolData {

FirstAidProtocol=[];

constructor(public http: Http) {
  this.FirstAidProtocol = [
    {
      //Under fire?
      Step: '0',
      InstructionText: 'ПОД ВРАЖЕСКИМ ОГНЕМ?',
      InformationButton: false,
      InformationPage: false,
      InformationPageName: '',
      InformationPager: true,
      CheckButton: false,
      CheckButtonGoToStepCount: null,
      YesButton: true,
      YesButtonGoToStepCount: 1,
      NoButton: true,
      NoButtonGoToStepCount: 2,
      MARCH: 'null',
    }, 

    {
      //Return fire and evacuate
      Step: '1',
      InstructionText: 'ПОДАВИТЕ ОГОНЬ ПРОТИВНИКА И ЭВАКУИРУЙТЕСЬ В УКРЫТИЕ',
      InformationButton: true,
      Information:      
      [
        {
          Title: "Ответный огонь",
          Text: "Весь личный состав (включая раненых, где это возможно) должен вернуться и поддерживать огонь для подавления противника и его эвакуации в укрытие.",  
        },
        {
          Title: "Если медик и раненый находятся под открытым небом",
          Text: "Если это возможно, откажитесь от человеческих гранад в направлении, противоположном войне. Рассмотрим: Torniquete для масивной геморрагии. Используйте дыхательные пути, чтобы получить этот список для перемещения.",  
        },
        {
          Title: "Если пострадавший на открытом воздухе",
          Text: "Если пострадавший не может вести ответный эффективный огонь, попросите его лежать как можно неподвижнее. Планируйте спасение, учитывая: \n•	Поддержка дружественных сил\n•	Использование транспортных средств\n•	Использование дыма\n•	Использование укрытия\n•	Использование веревочной линии\n•	Самые быстрые маршруты",  
        },
      ],
      InformationPage: false,
      InformationPageName: '',
      InformationPager: true,
      CheckButton: true,
      CheckButtonGoToStepCount: 2,
      YesButton: false,
      YesButtonGoToStepCount: null,
      NoButton: false,
      NoButtonGoToStepCount: null,
      MARCH: 'null',
    },

    {
      //Assess S.C.E.N.E
      Step: '2',
      InstructionText: 'ОЦЕНИТЕ Б.П.А.К.Р.',
      InformationButton: true,
      Information:      
      [
        {
          Text: "",  
        },
      ],
      InformationPage: true,
      InformationPageName: ScenePage,
      InformationPager: false,
      CheckButton: true,
      CheckButtonGoToStepCount: 3,
      YesButton: false,
      YesButtonGoToStepCount: null, 
      NoButton: false,
      NoButtonGoToStepCount: null, 
      MARCH: 'null',
    },

    {
      //Transmit alert message
      Step: '3',
      InstructionText: 'Передача предупреждающего сообщения',
      InformationButton: true,
      Information:      
      [
        {
          Text: "",  
        },
      ],
      InformationPage: true,
      InformationPageName: AlertPage,
      InformationPager: false,
      CheckButton: true,
      CheckButtonGoToStepCount: 6,
      YesButton: false,
      YesButtonGoToStepCount: null, 
      NoButton: false,
      NoButtonGoToStepCount: null, 
      MARCH: 'null',
    },

    {
      //Multiple casualties? 
      Step: '4',
      InstructionText: 'Множественные жертвы?',
      InformationButton: false,
      Information:      
      [
        {
          Text: "",  
        },
      ],
      InformationPager: false,
      CheckButton: false,
      CheckButtonGoToStepCount: null,
      YesButton: true,
      YesButtonGoToStepCount: 5, 
      NoButton: true,
      NoButtonGoToStepCount: 6, 
      MARCH: 'null',
    },

    {
      //Prioritize casualties
      Step: '5',
      InstructionText: 'Распределяйте приоритеты пострадавших и лечите их соответствующим образом.',
      InformationButton: true,
      Information:      
      [
        {
          Title: "Расставьте приоритеты среди жертв",
          Text: "В обстоятельствах, когда число жертв превышает количество служб реагирования и ресурсов, необходимо принять решения по определению приоритетности жертв, чтобы гарантировать, что для большинства жертв будет сделано самое лучшее..",  
        },
        {
          Title: "сортировка",
          Text: "Сортировка — это процесс определения приоритетности лечения пациентов в зависимости от тяжести их состояния, который может использоваться для определения приоритетности раненых.\nСледующие категории часто используются в сортировке:\n\n•	T1, приоритет 1 (КРАСНЫЙ: немедленно). Эта категория имеет наивысший приоритет для лечения или эвакуации, поскольку необходимы срочные меры для обеспечения выживания пострадавшего. Примеры: обструкция дыхательных путей, неотложная респираторная помощь, шок и тяжелая травма.\n\n•	Т2, приоритет 2 (ЖЕЛТЫЙ: срочно). Сюда входят случаи, требующие раннего лечения, в частности хирургического вмешательства, и рекомендуется провести эвакуацию в хирургическое учреждение в течение 6 часов после травмы. Примеры: серьезные травмы и переломы конечностей, закрытая травма головы, открытая травма глаза и ожоги средней степени тяжести.\n\n•	T3, приоритет 3 (ЗЕЛЕНЫЙ: с задержкой или удержанием). В этой категории лечение менее срочно и может быть отложено, если есть другие пострадавшие, требующие ограниченного лечения или эвакуации. Примеры: закрытые переломы, травмы мягких тканей, закрытая травма грудной клетки и травма лица.\n\n•	Мертв, приоритет 4 (ЧЕРНЫЙ: ожидающий или умерший). К этой категории относятся пострадавшие, чьи травмы или заболевания настолько серьезны, что у них минимальные шансы на выживание, или которые умерли по прибытии. Если возникнет конкуренция за ограниченные медицинские ресурсы, такие случаи будут иметь меньший приоритет для эвакуации или лечения, несмотря на тяжесть их состояния.",
        },
      ],
      InformationPager: false,
      CheckButton: true,
      CheckButtonGoToStepCount: 6,
      YesButton: false,
      YesButtonGoToStepCount: null, 
      NoButton: false,
      NoButtonGoToStepCount: null, 
      MARCH: 'null',
    },

    {
       //Massive bleeding?
      Step: '6',
      InstructionText: 'Массивное кровотечение?',
      InformationButton: false,
      Information:      
      [
        {
          Text: "",  
        },
      ],
      InformationPager: false,
      CheckButton: false,
      CheckButtonGoToStepCount: null,
      YesButton: true,
      YesButtonGoToStepCount: 7, 
      NoButton: true,
      NoButtonGoToStepCount: 18,
      MARCH: 'M',       
    },

    {
      //Bleeding on limbs?
     Step: '7',
     InstructionText: 'Кровотечение на конечностях?',
     InformationButton: false,
     Information:      
     [
       {
         Text: "",  
       },
     ],
     InformationPager: false,
     CheckButton: false,
     CheckButtonGoToStepCount: null,
     YesButton: true,
     YesButtonGoToStepCount: 8, 
     NoButton: true,
     NoButtonGoToStepCount: 16,
     MARCH: 'M',       
   },

    {
      //Apply tourniquet
     Step: '8',
     InstructionText: 'Наложить жгут',
     InformationButton: true,
     Information:      
      [
        {
          Text: "",  
        },
      ],
     InformationPage: true,
     InformationPageName: TourniquetPage,
     InformationPager: false,
     CheckButton: true,
     CheckButtonGoToStepCount: 9,
     YesButton: false,
     YesButtonGoToStepCount: null, 
     NoButton: false,
     NoButtonGoToStepCount: null,
     MARCH: 'M',       
   },

   {
    //Bleeding stopped?
   Step: '9',
   InstructionText: 'Кровотечение остановлено?',
   InformationButton: false,
   Information:      
    [
      {
        Text: "",  
      },
    ],
   InformationPage: false,
   InformationPageName: '',
   InformationPager: false,
   CheckButton: false,
   CheckButtonGoToStepCount: null,
   YesButton: true,
   YesButtonGoToStepCount: 60, 
   NoButton: true,
   NoButtonGoToStepCount: 10,
   MARCH: 'M',       
 },

 {
  //Apply tourniquet
 Step: '10',
 InstructionText: 'Сначала наложите второй жгут, указанный выше',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: TourniquetPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 11,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'M',       
},

{
  //Apply tourniquet
 Step: '11',
 InstructionText: 'Кровотечение остановилось?',
 InformationButton: false,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 60, 
 NoButton: true,
 NoButtonGoToStepCount: 12,
 MARCH: 'M',       
},

{
  //Pack Wound
 Step: '12',
 InstructionText: 'Пакетная рана',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: WoundpackingPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 13,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'M',       
},

{
  //Bleeding stopped?
 Step: '13',
 InstructionText: 'Кровотечение остановилось?',
 InformationButton: false,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 60, 
 NoButton: true,
 NoButtonGoToStepCount: 14,
 MARCH: 'M',       
},

{
  //Repack wound
 Step: '14',
 InstructionText: 'Перетакуйте рану и надавите на нее дольше',
 InformationButton: false,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: CirculationPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 15,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'M',       
},

{
  //Apply dressing
 Step: '15',
 InstructionText: 'Закрепите EPD на ране',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: CirculationPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 60,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'M',       
},

{
  //Pack wound
 Step: '16',
 InstructionText: 'Пакетная рана',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: WoundpackingPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 17,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'M',       
},

{
  //Bleeding stopped?
 Step: '17',
 InstructionText: 'Кровотечение остановилось?',
 InformationButton: false,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 60, 
 NoButton: true,
 NoButtonGoToStepCount: 14,
 MARCH: 'M',       
},

{
  //Casualty normal?
 Step: '18',
 InstructionText: 'Пострадавший реагирует нормально?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Встряхнуть и кричать",
      Text: "•	Если пострадавший в сознании, спросите: «Что случилось?» или «Где вы ранены?»\n•	Если пострадавший выглядит без сознания или потерял сознание, встряхните его и спросите: «С вами все в порядке?»\n•	Если пострадавший реагирует нормально, у него свободны дыхательные пути, он дышит и у него перфузия головного мозга.\n•	Если пострадавший говорит только короткими предложениями, у него могут возникнуть проблемы с дыханием. Отсутствие реакции пострадавшего является явным признаком критического заболевания.",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 27, 
 NoButton: true,
 NoButtonGoToStepCount: 19,
 MARCH: 'A',       
},

{
  //Casualty conscious?
 Step: '19',
 InstructionText: 'Пострадавший в сознании?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 24, 
 NoButton: true,
 NoButtonGoToStepCount: 20,
 MARCH: 'A',       
},

{
  //Examine airway & remove debris
 Step: '20',
 InstructionText: 'Осмотрите дыхательные пути и удалите потенциальный мусор',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Осмотр дыхательных путей",
      Text: "Если пострадавший выглядит без сознания, откройте ему рот, осмотрите рот и удалите возможные остатки.",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 21,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'A',       
},

{
  //Perform head-tilt
 Step: '21',
 InstructionText: 'Открытие дыхательных путей путем наклона головы',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: true,
 InformationPageName: HeadtiltPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 22,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'A',       
},

{
  //Continuing breathing difficulties?
 Step: '22',
 InstructionText: 'Продолжаются трудности с дыханием?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 23, 
 NoButton: true,
 NoButtonGoToStepCount: 27,
 MARCH: 'A',       
},

{
  //Recovery position
 Step: '23',
 InstructionText: 'Применить положение восстановления',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: true,
 InformationPageName: RecoverypositionPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 63,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'A',       
},

{
  //Examine airway & remove debris
 Step: '24',
 InstructionText: 'Осмотрите дыхательные пути и дайте пострадавшему удалить мусор',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Осмотр дыхательных путей",
      Text: "Если пострадавший находится в сознании, попросите его удалить изо рта потенциальный мусор.",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 25,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'A',       
},

{
  //Continuing problems? 
 Step: '25',
 InstructionText: 'Продолжаются проблемы с дыханием?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 26, 
 NoButton: true,
 NoButtonGoToStepCount: 27,
 MARCH: 'A',       
},

{
  //Sit-up & forward
 Step: '26',
 InstructionText: 'Примените положение сидя и вперед',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: true,
 InformationPageName: SitupPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 27,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'A',       
},

{
  //Examine chest and back
 Step: '27',
 InstructionText: 'Осмотр груди и спины',
 InformationButton: true,
 Information:      
  [
    {
      Title: "полная оценка грудной клетки",
      Text: "Полная оценка грудной клетки состоит из следующих элементов:\n•	Осмотрите грудь на предмет синяков, ран или отсутствия симметрии.\n•	Прислушайтесь к необычным звукам дыхания.\n•	Ощупайте грудную клетку на предмет повреждений или ран (в условиях низкой освещенности).\n•	Осмотрите подмышки пострадавшего, раны могут быть скрыты в складках кожи.",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 28,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'R',       
},

{
  //Sucking wound(s)?
 Step: '28',
 InstructionText: 'Открытая рана грудной клетки?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Открытые раны грудной клетки",
      Text: "Открытая рана грудной клетки может возникнуть в результате проникновения в грудную стенку пули, лезвия ножа, шрапнели или другого предмета. Некоторые признаки и симптомы открытой раны грудной клетки:\n• Из раны грудной клетки доносятся сосательные или шипящие звуки.\n• Пострадавший кашляет кровью.\n• Пенистая кровь течет из раны грудной клетки.\n• Одышка или затруднение дыхания.\n• Грудная клетка не поднимается нормально при вдохе.\n• Боль в плече или области грудной клетки, усиливающаяся при дыхании.\n• Синюшный оттенок губ, внутренней части рта, кончиков пальцев или ногтей. кровати.\n• Признаки шока, такие как учащенное и слабое сердцебиение.",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 29, 
 NoButton: true,
 NoButtonGoToStepCount: 31,
 MARCH: 'R',       
},

{
  //Seal wound
 Step: '29',
 InstructionText: 'Запечатать рану',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: true,
 InformationPageName: RespirationPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 30,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'R',       
},

{
  //Other sucking wound(s)?
 Step: '30',
 InstructionText: 'Другие открытые раны грудной клетки?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Открытые раны грудной клетки",
      Text: "Открытая рана грудной клетки может возникнуть в результате проникновения в грудную стенку пули, лезвия ножа, шрапнели или другого предмета. Некоторые признаки и симптомы открытой раны грудной клетки:\n• Из раны грудной клетки доносятся сосательные или шипящие звуки.\n• Пострадавший кашляет кровью.\n• Пенистая кровь течет из раны грудной клетки.\n• Одышка или затрудненное дыхание.\n• Грудная клетка не поднимается нормально при вдохе.\n• Боль в плече или области грудной клетки, усиливающаяся при дыхании.\n• Синюшный оттенок губ, внутренней части рта, кончиков пальцев или ногтей. кровати.\n• Признаки шока, такие как учащенное и слабое сердцебиение.",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 29, 
 NoButton: true,
 NoButtonGoToStepCount: 31,
 MARCH: 'R',       
},

{
  //Airway burn?
 Step: '31',
 InstructionText: 'Подозрение на ожог дыхательных путей?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Ожоги дыхательных путей",
      Text: "Ожоги дыхательных путей могут быть вызваны вдыханием дыма, пара, перегретого воздуха или токсичных паров. Ожоги дыхательных путей могут быть очень серьезными, поскольку быстрый отек обожженных тканей в дыхательных путях может быстро заблокировать поток воздуха в легкие. Симптомы и признаки включают:\n• Охриплость голоса или изменение голоса.\n• Сильный кашель.\n• Стридор.\n• Ожоги лица.\n• Отек головы и шеи.\n• Выраженные волосы в носу, на бровях или ресницы.\n• Копоть в слюне, мокроте, носу или рту.",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 62, 
 NoButton: true,
 NoButtonGoToStepCount: 33,
 MARCH: 'R',       
},

{
  //Cool airway
 Step: '32',
 InstructionText: 'Охлаждение дыхательных путей холодными жидкостями',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: null,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'R',       
},

{
  //Full body check
 Step: '33',
 InstructionText: 'Выполните полную проверку тела',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Быстрая оценка кровотечения",
      Text: "Используйте следующую процедуру:\n• Проверьте все наложенные жгуты (все еще эффективны?).\n• Проверьте голову на наличие кровотечения.\n• Проверьте грудь на наличие кровотечения.\n• Проверьте живот (включая спину).\n• Проверьте таз.\n• Проверьте верхнюю часть ног.\n• Проверьте голени и руки.",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 34,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Bleeding?
 Step: '34',
 InstructionText: 'Кровотечение?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 35, 
 NoButton: true,
 NoButtonGoToStepCount: 51,
 MARCH: 'C',       
},

{
  //Massive bleeding?
 Step: '35',
 InstructionText: 'Массивное кровотечение?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 36, 
 NoButton: true,
 NoButtonGoToStepCount: 48,
 MARCH: 'C',       
},

{
  //Bleeding on limbs?
 Step: '36',
 InstructionText: 'Кровотечение на конечностях?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 37, 
 NoButton: true,
 NoButtonGoToStepCount: 45,
 MARCH: 'C',       
},

{
  //Tourniquet
 Step: '37',
 InstructionText: 'Наложить жгут',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: true,
 InformationPageName: TourniquetPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 38,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Bleeding stopped?
 Step: '38',
 InstructionText: 'Кровотечение остановилось?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 44, 
 NoButton: true,
 NoButtonGoToStepCount: 39,
 MARCH: 'C',       
},

{
  //Apply 2nd tourniquet
 Step: '39',
 InstructionText: 'Сначала наложите второй жгут, указанный выше',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: TourniquetPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 40,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Bleeding stopped?
 Step: '40',
 InstructionText: 'Кровотечение остановилось?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 44, 
 NoButton: true,
 NoButtonGoToStepCount: 41,
 MARCH: 'C',       
},

{
  //Pack Wound
 Step: '41',
 InstructionText: 'Пакетная рана',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: WoundpackingPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 42,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Bleeding stopped?
 Step: '42',
 InstructionText: 'Кровотечение остановилось?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 44, 
 NoButton: true,
 NoButtonGoToStepCount: 43,
 MARCH: 'C',       
},

{
  //Use EPD & direct pressure
 Step: '43',
 InstructionText: 'Перетакуйте рану и надавите на нее дольше',
 InformationButton: false,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: CirculationPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 44,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Apply dressing
 Step: '44',
 InstructionText: 'Закрепите EPD на ране',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: CirculationPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 47,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Pack Wound
 Step: '45',
 InstructionText: 'Пакетная рана',
 InformationButton: true,
 Information:      
  [
    {
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: WoundpackingPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 46,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Bleeding stopped?
 Step: '46',
 InstructionText: 'Кровотечение остановилось?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 47, 
 NoButton: true,
 NoButtonGoToStepCount: 43,
 MARCH: 'C',       
},

{
  //Other bleeding wounds
 Step: '47',
 InstructionText: 'Другие кровоточащие раны?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 35, 
 NoButton: true,
 NoButtonGoToStepCount: 51,
 MARCH: 'C',       
},

{
  //Abdominal wounds?
 Step: '48',
 InstructionText: 'Ранения живота?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 49, 
 NoButton: true,
 NoButtonGoToStepCount: 50,
 MARCH: 'C',       
},

{
  //Apply wet dressing
 Step: '49',
 InstructionText: 'Наложить влажную повязку',
 InformationButton: true,
 Image1: true,
 Information:      
  [
    {
      Title: "Лечение раны на животе",
      Text: "•	Не пытайтесь прикоснуться к органам или втолкнуть их обратно в полость тела.\n• Накройте стерильной повязкой, смоченной физиологическим раствором или чистой водой, или чистой пластиковой крышкой, заклеенной со всех четырех сторон.\n• Надежно, но не плотно забинтуйте\ n• Разрешить пострадавшему сидеть или лежать в удобном положении. Возможно, ноги согнуты, колени подняты к груди.",  
      ImageURL: './assets/imgs/circulation/Abdominal.png'
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 47,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Apply EPD
 Step: '50',
 InstructionText: 'Применить ЭПД',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: CirculationPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 47,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'C',       
},

{
  //Suffering from heat
 Step: '51',
 InstructionText: 'Страдаете от тепловых судорог, истощения или инсульта?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: HyperthermiaPage,
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 52, 
 NoButton: true,
 NoButtonGoToStepCount: 53,
 MARCH: 'H',       
},

{
  //Cool casualty
 Step: '52',
 InstructionText: 'Крутая жертва',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: HyperthermiaPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 55,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'H',       
},

{
  //Suffering from cold
 Step: '53',
 InstructionText: 'Страдаете от переохлаждения?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: HypothermiaPage,
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 54, 
 NoButton: true,
 NoButtonGoToStepCount: 55,
 MARCH: 'H',       
},

{
  //Rewarm casualty
 Step: '54',
 InstructionText: 'Согреть пострадавшего',
 InformationButton: true,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: true,
 InformationPageName: HypothermiaPage,
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 55,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'H',       
},

{
  //Other casualties
 Step: '55',
 InstructionText: 'Другие жертвы?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 6, 
 NoButton: true,
 NoButtonGoToStepCount: 56,
 MARCH: null,       
},

{
  //Transfer to forward medical team?
 Step: '56',
 InstructionText: 'Можно ли передать пострадавшего (передовой) медицинской бригаде?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 59, 
 NoButton: true,
 NoButtonGoToStepCount: 57,
 MARCH: null,       
},

{
  //Keep checking MARCH
 Step: '57',
 InstructionText: 'Переоценка МАРТ',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Переоценка МАРТ",
      Text: "Если пострадавшего пока невозможно передать (передовой) медицинской бригаде, лицу, оказывающему первую помощь, следует продолжить мониторинг и повторную оценку MARCH, например, путем:\n• Повторной оценки эффективности ранее применявшихся мер, таких как жгуты, тампоны и ЭПД.\ n• Проверка того, что дыхательные пути пострадавшего все еще открыты.\n• Проверка того, что дыхание пострадавшего все еще адекватно. Повторная оценка нагрудных герметиков и EPD.\n• Повторная оценка ранее вводившихся EPD.\n• Повторная оценка того, страдает ли пострадавший от гипертермии или гипотермии.\n• Убедиться, что пострадавший чувствует себя настолько комфортно, насколько это позволяет его ситуация.",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 58,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: null,       
},

{
  //Restart protocol?
 Step: '58',
 InstructionText: 'Протокол перезапуска, чтобы помочь в переоценке марша?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 6, 
 NoButton: true,
 NoButtonGoToStepCount: 56,
 MARCH: null,       
},

{
  //End of protocol
 Step: '59',
 InstructionText: 'Конец протокола',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 0,
 YesButton: false,
 YesButtonGoToStepCount: null, 
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: null,       
},

{
  //Other massive bleeding
 Step: '60',
 InstructionText: 'Другое массивное кровотечение?',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: false,
 CheckButtonGoToStepCount: null,
 YesButton: true,
 YesButtonGoToStepCount: 7, 
 NoButton: true,
 NoButtonGoToStepCount: 18,
 MARCH: 'M',       
},

{
  // Call medic after recovery
 Step: '61',
 InstructionText: 'Вызов медика',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 27,
 YesButton: false,
 YesButtonGoToStepCount: null,
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'A',       
},

{
  //Call medic after airway burns
 Step: '62',
 InstructionText: 'Вызов медика',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 33,
 YesButton: false,
 YesButtonGoToStepCount: null,
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'R',       
},

{
  //Hypothermia blanket
 Step: '63',
 InstructionText: 'Наложите одеяло от гипотермии',
 InformationButton: false,
 Information:      
  [
    {
      Title: "",
      Text: "",  
    },
  ],
 InformationPage: false,
 InformationPageName: '',
 InformationPager: false,
 CheckButton: true,
 CheckButtonGoToStepCount: 61,
 YesButton: false,
 YesButtonGoToStepCount: null,
 NoButton: false,
 NoButtonGoToStepCount: null,
 MARCH: 'A',       
},

  ]
}}
