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
export class ESProtocolData {

FirstAidProtocol=[];

constructor(public http: Http) {
  this.FirstAidProtocol = [
    {
      //Under fire?
      Step: '0',
      InstructionText: '¿BAJO FUEGO ENEMIGO?',
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
      InstructionText: 'SUPRIMIR EL FUEGO ENEMIGO Y EVACUAR PARA CUBRIRSE',
      InformationButton: true,
      Information:      
      [
        {
          Title: "RESPONDER EL ATAQUE",
          Text: "La técnica de arrastre es un movimiento de emergencia utilizado por uno o dos Socorristas, para mover a una víctima de una corta distancia a una zona segura. Esto proporciona una mínima protección a la columna vertebral, pero permite un movimiento sin equipo y con rescatistas limitados.",  
        },
        {
          Title: "SI EL MÉDICO Y EL HERIDO ESTÁN AL DESCUBIERTO",
          Text: "Si es posible, despliegue el humo contra el viento. Considere:\n• Torniquete para hemorragias masivas\n• Rodar a la víctima boca abajo (vía aérea) hasta que esté lista para moverse.",  
        },
        {
          Title: "SI EL HERIDO ESTÁ AL DESCUBIERTO",
          Text: "Si el herido no puede responder el fuego efectivamente, indÍquele que se mantenga lo más quieto posible. Planifique el rescate, considerando:\n Apoyo de aliados.\n Uso de vehículos.\n Uso de granadas de humo.\n Uso de cobertura.\n Uso de cuerda guía. \n Rutas rápidas.",  
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
      InstructionText: 'EVALÚAR S.C.A.N.R',
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
      InstructionText: 'Transmitir mensaje de alerta',
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
      InstructionText: '¿Múltiples víctimas?',
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
      InstructionText: 'Priorizar a las víctimas y tratarlas en consecuencia',
      InformationButton: true,
      Information:      
      [
        {
          Title: "Priorizar las bajas",
          Text: "En circunstancias en las que el número de víctimas supera el número de socorristas y recursos, se deben tomar decisiones para priorizar las víctimas para garantizar que se haga lo mejor para la mayoría de las víctimas.",  
        },
        {
          Title: "Triaje",
          Text: "La clasificación es el proceso de determinar la prioridad de los tratamientos de los pacientes en función de la gravedad de su afección y se puede utilizar para priorizar a las víctimas.\nLas siguientes categorías se utilizan a menudo en la clasificación:\n\n• T1, prioridad 1 (ROJO: Inmediato ). Esta categoría tiene la máxima prioridad para el tratamiento o la evacuación, ya que se requieren intervenciones urgentes para garantizar la supervivencia de la víctima. Ejemplos: obstrucción de las vías respiratorias, emergencias respiratorias, shock y traumatismo grave.\n\n• T2, prioridad 2 (AMARILLO: Urgente). Esto comprende casos que requieren tratamiento temprano, particularmente cirugía, y se recomienda que la evacuación a un centro quirúrgico se realice dentro de las 6 horas posteriores a la lesión. Ejemplos: lesiones y fracturas importantes de extremidades, lesiones en la cabeza cerradas, lesiones en los ojos abiertos y quemaduras moderadas.\n\n• T3, prioridad 3 (VERDE: Retrasado o en espera). El tratamiento es menos urgente en esta categoría y puede diferirse si hay otras víctimas que requieren tratamiento o medios de evacuación limitados. Ejemplos: fracturas cerradas, lesiones de tejidos blandos, lesiones cerradas en el pecho y lesiones faciales.\n\n• Muerto, prioridad 4 (NEGRO: expectante o fallecido). Esta categoría se refiere a víctimas cuyas lesiones o enfermedades son tan graves que tienen mínimas posibilidades de sobrevivir o que están muertas al llegar. Si hubiera competencia por recursos médicos limitados, estos casos tendrán menor prioridad para la evacuación o el tratamiento, a pesar de la gravedad de su condición.",
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
      InstructionText: '¿Sangrado masivo?',
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
     InstructionText: '¿Sangrado en las extremidades?',
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
     InstructionText: 'aplicar torniquete',
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
   InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: 'Aplique el segundo torniquete arriba del primero.',
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
 InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: 'herida de paquete',
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
 InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: 'Vuelva a empaquetar la herida y aplique presión por más tiempo.',
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
 InstructionText: 'Asegure el EPD sobre la herida',
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
 InstructionText: 'herida de paquete',
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
 InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: '¿La víctima está respondiendo normalmente?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Agitar y gritar",
      Text: "• Si la víctima está consciente, pregunte '¿qué pasó?' o '¿dónde está herido?'\n• Si la víctima parece inconsciente o se ha desplomado, sacúdala y pregúntele '¿está bien?'\n• Si la víctima responde normalmente, la persona tiene las vías respiratorias despejadas, respira y tiene perfusión cerebral.\n• Si la víctima habla sólo con frases cortas, es posible que tenga problemas respiratorios. La falta de respuesta de la víctima es un claro marcador de enfermedad crítica.",  
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
 InstructionText: '¿Está consciente la víctima?',
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
 InstructionText: 'Examinar las vías respiratorias y eliminar posibles residuos.',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Examinar las vías respiratorias",
      Text: "Si la víctima parece inconsciente, abra la boca, inspeccione la boca y elimine los posibles restos.",  
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
 InstructionText: 'Abrir las vías respiratorias realizando la inclinación de la cabeza.',
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
 InstructionText: '¿Dificultades respiratorias continuas?',
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
 InstructionText: 'Aplicar posición de recuperación',
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
 InstructionText: 'Examinar las vías respiratorias y dejar que la víctima retire los desechos.',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Examinar las vías respiratorias",
      Text: "Si la víctima está consciente, pídale que se quite los posibles restos de la boca.",
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
 InstructionText: '¿Problemas respiratorios continuos?',
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
 InstructionText: 'Aplicar posición sentada y adelantada',
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
 InstructionText: 'Examinar el pecho y la espalda.',
 InformationButton: true,
 Information:      
  [
    {
      Title: "evaluación completa del tórax",
      Text: "La evaluación completa del tórax consta de los siguientes elementos:\n• Observe el tórax en busca de hematomas, heridas o falta de simetría.\n• Escuche si hay ruidos respiratorios inusuales.\n• Toque el tórax en busca de anomalías o heridas (en condiciones de poca luz). condiciones).\n• Compruebe las axilas de la víctima, las heridas pueden estar ocultas en los pliegues de la piel.",
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
 InstructionText: '¿Herida abierta en el pecho?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Heridas abiertas en el pecho",
      Text: "Una herida abierta en el pecho puede ser causada por la penetración de la pared torácica por una bala, hoja de cuchillo, metralla u otro objeto. Algunos de los signos y síntomas de una herida abierta en el pecho:\n• Sonidos de succión o silbidos provenientes de la herida en el pecho.\n• El herido tose sangre.\n• Sangre espumosa proveniente de la herida en el pecho.\n• Falta de aire o dificultad para respirar.\n• El pecho no se eleva normalmente cuando la víctima inhala.\n• Dolor en el hombro o en el área del pecho que aumenta con la respiración.\n• Tinte azulado en los labios, el interior de la boca, las yemas de los dedos o el lecho ungueal.\ n• Signos de shock, como latidos cardíacos rápidos y débiles.",
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
 InstructionText: 'Sellar la herida',
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
 InstructionText: '¿Otras heridas abiertas en el pecho?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Heridas abiertas en el pecho",
      Text: "Una herida abierta en el pecho puede ser causada por la penetración de la pared torácica por una bala, hoja de cuchillo, metralla u otro objeto. Algunos de los signos y síntomas de una herida abierta en el pecho:\n• Sonidos de succión o silbidos provenientes de la herida en el pecho.\n• El herido tose sangre.\n• Sangre espumosa proveniente de la herida en el pecho.\n• Falta de aire o dificultad para respirar.\n• El pecho no se eleva normalmente cuando la víctima inhala.\n• Dolor en el hombro o en el área del pecho que aumenta con la respiración.\n• Tinte azulado en los labios, el interior de la boca, las yemas de los dedos o el lecho ungueal.\ n• Signos de shock, como latidos cardíacos rápidos y débiles.",
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
 InstructionText: '¿Sospechas de quemaduras en las vías respiratorias?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Quemaduras en las vías respiratorias",
      Text: "Las quemaduras en las vías respiratorias pueden ser causadas por la inhalación de humo, vapor, aire sobrecalentado o vapores tóxicos. Las quemaduras de las vías respiratorias pueden ser muy graves ya que la rápida inflamación del tejido quemado en las vías respiratorias puede bloquear rápidamente el flujo de aire a los pulmones. Los síntomas y signos incluyen:\n• Ronquera o cambio en la voz.\n• Tos fuerte.\n• Estridor.\n• Quemaduras en la cara.\n• Hinchazón de cabeza y cuello.\n• Señas de vello nasal, cejas o pestañas.\n• Hollín en la saliva, el esputo, la nariz o la boca.",
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
 InstructionText: 'Vías respiratorias frías con líquidos fríos.',
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
 InstructionText: 'Realizar revisión de cuerpo completo',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Evaluación rápida de sangrado.",
      Text: "Utilice el siguiente procedimiento:\n• Vuelva a evaluar los torniquetes aplicados (¿todavía son eficaces?).\n• Compruebe si hay sangrado en la cabeza.\n• Compruebe si hay sangrado en el pecho.\n• Compruebe si hay sangrado en el abdomen.\n• Revise la pelvis.\n• Revise la parte superior de las piernas.\n• Revise la parte inferior de las piernas y los brazos.",
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
 InstructionText: '¿Sangrado?',
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
 InstructionText: '¿Sangrado masivo?',
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
 InstructionText: '¿Sangrado en las extremidades?',
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
 InstructionText: 'aplicar torniquete',
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
 InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: 'Aplique el segundo torniquete arriba del primero.',
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
 InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: 'herida de paquete',
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
 InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: 'Vuelva a empaquetar la herida y aplique presión por más tiempo.',
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
 InstructionText: 'Asegure el EPD sobre la herida',
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
 InstructionText: 'herida de paquete',
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
 InstructionText: '¿Se detuvo el sangrado?',
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
 InstructionText: '¿Otras heridas sangrantes?',
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
 InstructionText: '¿Heridas abdominales?',
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
 InstructionText: 'Aplicar apósito húmedo',
 InformationButton: true,
 Image1: true,
 Information:      
  [
    {
      Title: "Tratamiento de heridas abdominales",
      Text: "• No intente tocar los órganos ni empujarlos hacia la cavidad del cuerpo.\n• Cúbralos con un vendaje estéril humedecido con solución salina o agua limpia o con una cubierta de plástico limpia pegada con cinta adhesiva en los cuatro lados.\n• Vende firmemente pero no con fuerza. \n• Permita que la víctima se siente o se acueste en una posición cómoda. Posiblemente con las piernas flexionadas y las rodillas levantadas hacia el pecho.",  
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
 InstructionText: 'Aplicar DEP',
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
 InstructionText: '¿Sufres de calambres por calor, agotamiento o derrame cerebral?',
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
 InstructionText: 'víctima genial',
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
 InstructionText: '¿Sufres de hipotermia?',
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
 InstructionText: 'Recalentar a la víctima',
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
 InstructionText: '¿Otras víctimas?',
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
 InstructionText: '¿Se puede entregar la víctima a un equipo médico (de avanzada)?',
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
 InstructionText: 'Reevaluar MARZO',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Reevaluar MARZO",
      Text: "Cuando la víctima aún no puede ser transferida a un equipo médico (de avanzada), el socorrista debe continuar monitoreando y reevaluando MARCH, por ejemplo:\n• Reevaluando la efectividad de las medidas administradas previamente, como torniquetes, vendajes para heridas y DEP.\ n• Verificar que las vías respiratorias de la víctima aún estén abiertas.\n• Verificar que la respiración de la víctima aún sea adecuada. Reevaluar los sellos torácicos y los DEP.\n• Reevaluar los DEP administrados previamente.\n• Reevaluar si la víctima sufre de hipertermia o hipotermia.\n• Asegurarse de que la víctima esté tan cómoda como lo permita su situación.",  
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
 InstructionText: '¿Reiniciar el protocolo para ayudar a reevaluar la marcha?',
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
 InstructionText: 'Fin del protocolo',
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
 InstructionText: '¿Otro sangrado masivo?',
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
 InstructionText: 'llamar al medico',
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
 InstructionText: 'llamar al medico',
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
 InstructionText: 'Aplicar manta de hipotermia',
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
