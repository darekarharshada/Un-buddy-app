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
export class FRProtocolData {

FirstAidProtocol=[];

constructor(public http: Http) {
  this.FirstAidProtocol = [
    {
      //Under fire ?
      Step: '0',
      InstructionText: 'Sous le feu ennemi ?',
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
      InstructionText: 'Réprimer le feu ennemi et évacuer à couvert',
      InformationButton: true,
      Information:      
      [
        {
          Title: "Répliquer au tir",
          Text: "Tout le personnel (y compris les blessés, le cas échéant) doit revenir et maintenir le feu pour réprimer l'ennemi afin d'évacuer pour se mettre à couvert.",  
        },
        {
          Title: "Si infirmier et victime à découvert",
          Text: "Déployez de la fumée au vent si possible. Considérez:\n•	Tourniquet pour un saignement massif\n•	Retournement de la victime face vers le bas (voies aériennes) jusqu'à ce qu'elle soit prête à bouger.",  
        },
        {
          Title: "Si victime à découvert",
          Text: "Si la victime est incapable de riposter efficacement, dites-lui de rester couchée et immobile autant que possible. Planifiez le sauvetage en considérant: \n•	Soutien des forces amies \n •	Utilisation des véhicules \n •	Utilisation de la fumée \n •	Se mettre à couvert \n •	Utilisation d'un filin de corde \n •	Itinéraires les plus rapides",  
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
      InstructionText: 'Évaluer la S.C.E.N.E',
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
      InstructionText: 'Transmettre un message d’alerte',
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
      //Multiple casualties ? 
      Step: '4',
      InstructionText: 'De multiples victimes ?',
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
      InstructionText: 'Prioriser les victimes et les traiter en conséquence',
      InformationButton: true,
      Information:      
      [
        {
          Title: "Prioriser les victimes",
          Text: "Dans les cas où le nombre de victimes l’emporte sur le nombre d’intervenants et de ressources, des décisions doivent être prises pour établir l’ordre de priorité des victimes afin de s’assurer que la plupart des victimes seront traitées au mieux.",  
        },
        {
          Title: "Triage",
          Text: "Le triage est le processus qui consiste à déterminer la priorité des traitements des patients en fonction de la gravité de leur état et peut servir à prioriser les victimes. Les catégories suivantes sont souvent utilisées dans le triage: \n\n•	T1 priorité 1 (ROUGE: Immédiat). Cette catégorie a la plus haute priorité pour le traitement ou l’évacuation, car des interventions urgentes sont nécessaires pour assurer la survie de la victime. Exemples: obstruction des voies respiratoires, urgences respiratoires, chocs et traumatismes graves.\n\n •	T2 priorité 2 (JAUNE: Urgent). Il s’agit des cas qui nécessitent un traitement précoce, en particulier une intervention chirurgicale, et il est recommandé que l’évacuation vers un bloc opératoire ait lieu dans les 6 heures suivant la blessure. Exemples: blessures graves et fractures d’un membre, traumatisme crânien fermé, lésions oculaires ouvertes et brûlures modérées.\n\n •	T3 priorité 3 (VERT: Différé ou en attente). Le traitement est moins urgent dans cette catégorie et peut être différé s’il y a d’autres victimes qui requièrent des moyens limités de traitement ou d’évacuation. Exemples: fractures fermées, lésion des tissus, lésion fermée de la poitrine et lésion faciale.\n\n •	T4 priorité 4 (NOIR: Agonisant ou décédé). Cette catégorie comprend les victimes dont les blessures ou les maladies sont si graves qu’elles ont peu de chances de survie ou qui sont décédées à leur arrivée. S’il y a concurrence pour obtenir des ressources médicales limitées, ces cas seront moins prioritaires pour l’évacuation ou le traitement malgré la gravité de leur état.",
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
       //Massive bleeding ?
      Step: '6',
      InstructionText: 'Hémorragie massive ?',
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
      //Bleeding on limbs ?
     Step: '7',
     InstructionText: 'Hémorragie sur les membres ?',
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
     InstructionText: 'Appliquer un garrot tourniquet',
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
    //Bleeding stopped ?
   Step: '9',
   InstructionText: 'Le saignement s’est arrêté ?',
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
  //Appliquer un garrot tourniquet
 Step: '10',
 InstructionText: 'Appliquer un 2e garrot tourniquet au-dessus du premier',
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
 InstructionText: 'Le saignement s’est arrêté ?',
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
 InstructionText: 'Emballage de la plaie',
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
  //Bleeding stopped ?
 Step: '13',
 InstructionText: 'Le saignement s’est arrêté ?',
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
 InstructionText: 'Remballer la plaie et exercer une plus longue pression',
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
 InstructionText: 'Fixer le PCU sur la plaie',
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
 InstructionText: 'Emballage de la plaie',
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
  //Bleeding stopped ?
 Step: '17',
 InstructionText: 'Le saignement s’est arrêté ?',
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
  //Casualty normal ?
 Step: '18',
 InstructionText: 'La victime réagit-elle normalement ?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Secouez et criez",
      Text: "•	Si la victime est consciente, demandez-lui « Que s’est-il passé ? » ou « Où êtes-vous blessé ? »\n•	Si la victime semble inconsciente ou s’est évanouie, secouez-la et demandez-lui si elle va bien.\n•	Si la victime réagit normalement, la personne a les voies respiratoires dégagées, respire et a une perfusion cérébrale.\n•	Si la victime ne parle qu’en phrases courtes, elle peut avoir des problèmes respiratoires. Le fait que la victime ne réponde pas est un signe clair de maladie grave.",  
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
  //Casualty conscious ?
 Step: '19',
 InstructionText: 'La victime est-elle consciente ?',
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
 InstructionText: 'Examinez les voies respiratoires et enlevez les débris potentiels.',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Examiner les voies respiratoires",
      Text: "Si la victime semble inconsciente, ouvrez la bouche, inspectez la bouche et enlevez les débris potentiels.",  
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
 InstructionText: 'Ouvrez les voies respiratoires en faisant une inclinaison de la tête',
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
  //Continuing breathing difficulties ?
 Step: '22',
 InstructionText: 'Difficultés respiratoires persistantes ?',
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
 InstructionText: 'Exécuter la position latérale de sécurité',
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
 InstructionText: 'Examinez les voies respiratoires et laissez la victime enlever les débris.',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Examiner les voies respiratoires",
      Text: "Si la victime est consciente, demandez-lui d’enlever les débris potentiels de sa bouche.",
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
  //Continuing problems ? 
 Step: '25',
 InstructionText: 'Problèmes respiratoires persistants ?',
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
 InstructionText: 'Appliquer la position assise penchée en avant',
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
 InstructionText: 'Examinez la poitrine et le dos',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Examen thoracique complet",
      Text: "L’examen thoracique complet comprend les éléments suivants:\n•	Examiner la poitrine pour voir s’il y a des ecchymoses ou un manque de symétrie.\n•	Écouter la respiration à la recherche de sons inhabituels.\n•	Palper la poitrine à la recherche d’anomalies ou de blessures (dans des conditions de faible luminosité).\n•	Vérifier les aisselles de la victime, des blessures peuvent être cachées dans les plis de la peau.",
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
  //Sucking wound(s) ?
 Step: '28',
 InstructionText: 'Blessure ouverte à la poitrine ?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Blessures ouvertes à la poitrine",
      Text: "Une blessure ouverte à la poitrine peut être causée par la pénétration de la paroi thoracique par une balle, un éclat d’obus, une lame de couteau, ou tout autre objet. Certains des signes et symptômes d’une plaie thoracique ouverte:\n•	Sons de succion ou de sifflement provenant d’une blessure à la poitrine.\n•	La victime crache du sang.\n•	Sang mousseux provenant de la blessure à la poitrine.\n•	Essoufflement ou respiration difficile.\n•	Soulèvement anormal de la poitrine lorsque la victime inhale.\n•	Douleur à l’épaule ou à la poitrine qui augmente avec la respiration.\n•	Teinte bleutée des lèvres, à l’intérieur de la bouche, au bout des doigts ou au lit des ongles.\n•	Signes de choc tels qu’un battement cardiaque rapide et faible.",
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
 InstructionText: 'Fermer une plaie',
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
  //Other sucking wound(s) ?
 Step: '30',
 InstructionText: 'Autres blessures ouvertes à la poitrine ?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Blessures ouvertes à la poitrine",
      Text: "Une blessure ouverte à la poitrine peut être causée par la pénétration de la paroi thoracique par une balle, un éclat d’obus, une lame de couteau, ou tout autre objet. Certains des signes et symptômes d’une plaie thoracique ouverte:\n•	Sons de succion ou de sifflement provenant d’une blessure à la poitrine.\n•	La victime crache du sang.\n•	Sang mousseux provenant de la blessure à la poitrine.\n•	Essoufflement ou respiration difficile.\n•	Soulèvement anormal de la poitrine lorsque la victime inhale.\n•	Douleur à l’épaule ou à la poitrine qui augmente avec la respiration.\n•	Teinte bleutée des lèvres, à l’intérieur de la bouche, au bout des doigts ou au lit des ongles.\n•	Signes de choc tels qu’un battement cardiaque rapide et faible.",
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
  //Airway burn ?
 Step: '31',
 InstructionText: 'Brûlures présumées des voies respiratoires ?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Brûlures des voies respiratoires",
      Text: "Les brûlures des voies respiratoires peuvent être causées par l’inhalation de fumée, de vapeur, d’air surchauffé ou de fumées toxiques. Les brûlures des voies respiratoires peuvent être très graves, car le gonflement rapide des tissus brûlés dans les voies respiratoires peut bloquer rapidement le flux d’air vers les poumons. Les symptômes et les signes comprennent:\n•	Enrouement ou changement de voix\n•	Toux sévère\n•	Stridor\n•	Brûlures au visage\n•	Enflure de la tête et du cou\n•	Sourcils ou cils nasaux marqués\n•	Suie dans le nez ou la bouche, expectorations de salive",
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
 InstructionText: 'Rafraîchir les voies respiratoires avec des fluides froids',
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
  //Full body check
 Step: '33',
 InstructionText: 'Faire un examen complet du corps',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Évaluation rapide des saignements",
      Text: "Suivez la procédure suivante:\n•	Réévaluer les garrots appliqués (toujours efficaces ?). \n•	Vérifier si la tête saigne.\n•	Vérifier la poitrine pour les saignements.\n•	Vérifier l’abdomen (y compris le dos).\n•	Vérifier le bassin.\n•	Vérifier le haut des jambes.\n•	Vérifier le bas des jambes et des bras.",
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
  //Bleeding ?
 Step: '34',
 InstructionText: 'Hémorragie ?',
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
  //Massive bleeding ?
 Step: '35',
 InstructionText: 'Hémorragie massive ?',
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
  //Bleeding on limbs ?
 Step: '36',
 InstructionText: 'Hémorragie sur les membres ?',
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
 InstructionText: 'Appliquer un garrot tourniquet',
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
  //Bleeding stopped ?
 Step: '38',
 InstructionText: 'Le saignement s’est arrêté ?',
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
 InstructionText: 'Appliquer un 2e garrot tourniquet au-dessus du premier',
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
  //Bleeding stopped ?
 Step: '40',
 InstructionText: 'Le saignement s’est arrêté ?',
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
 InstructionText: 'Emballage de la plaie',
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
  //Bleeding stopped ?
 Step: '42',
 InstructionText: 'Le saignement s’est arrêté ?',
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
 InstructionText: 'Remballer la plaie et exercer une plus longue pression',
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
 InstructionText: 'Fixer le PCU sur la plaie',
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
 InstructionText: 'Emballage de la plaie',
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
  //Bleeding stopped ?
 Step: '46',
 InstructionText: 'Le saignement s’est arrêté ?',
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
 InstructionText: 'D’autres blessures qui saignent ?',
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
  //Abdominal wounds ?
 Step: '48',
 InstructionText: 'Blessures abdominales ?',
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
 InstructionText: 'Appliquer un pansement humide',
 InformationButton: true,
 Image1: true,
 Information:      
  [
    {
      Title: "Traitement des plaies abdominales",
      Text: "Traitement des plaies abdominales\n•	N’essayez pas de toucher des organes ou de repousser des organes dans la cavité corporelle.\n•	Recouvrir d’un pansement stérile humidifié avec du sérum physiologique ou de l’eau propre ou d’une couverture en plastique propre collée sur les quatre côtés.\n•	Panser de façon sûre mais sans trop serrer\n•	Permettre à la victime de s’asseoir ou de s’allonger dans une position confortable. Peut-être avec les jambes fléchies, les genoux levés vers la poitrine.",  
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
 InstructionText: 'Appliquer un PCU',
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
 InstructionText: 'Souffrant de crampes de chaleur, d’épuisement ou d’accident vasculaire cérébral ?',
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
 InstructionText: 'Rafraîchir la victime',
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
 InstructionText: 'Souffrant d’hypothermie ?',
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
 InstructionText: 'Réchauffer la victime',
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
 InstructionText: 'D’autres victimes ?',
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
  //Transfer to forward medical team ?
 Step: '56',
 InstructionText: 'La victime peut-elle être confiée à une équipe médicale (avancée) ?',
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
 InstructionText: 'Réévaluer MARCH',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Réévaluer MARCH",
      Text: "Lorsque la victime ne peut pas être transférée à une équipe médicale (avancée) le secouriste doit continuer à surveiller et réévaluer MARCH:\n•	Réévaluer l’efficacité des mesures déjà administrées, telles que l’emballage des plaies, les garrots tourniquet et les PCU.\n•	Vérifier que les voies respiratoires de la victime sont encore ouvertes.\n•	Vérifier que la respiration de la victime est encore adéquate. Réévaluation des pansements thoraciques occlusifs et des PCU.\n•	Réévaluer les PCU déjà posés.\n•	Réévaluer si la victime souffre d’hyperthermie ou d’hypothermie.\n•	S’assurer que la victime est aussi à l’aise que la situation de la personne le permet.",  
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
  //Restart protocol ?
 Step: '58',
 InstructionText: 'Redémarrer le protocole pour aider à réévaluer MARCH ?',
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
 InstructionText: 'Fin du protocole',
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
 InstructionText: 'D’autres saignements massifs ?',
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
  //Call medic after recovery
 Step: '61',
 InstructionText: 'Alerter l’auxiliaire-sanitaire',
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
 InstructionText: 'Alerter l’auxiliaire-sanitaire',
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
 InstructionText: 'Appliquer une couverture d’hypothermie',
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
