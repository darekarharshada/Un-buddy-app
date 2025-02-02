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
export class ENGProtocolData {

FirstAidProtocol=[];

constructor(public http: Http) {
  this.FirstAidProtocol = [
    {
      //Under fire?
      Step: '0',
      InstructionText: 'Under enemy fire?',
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
      InstructionText: 'Supress enemy fire and evacuate to cover',
      InformationButton: true,
      Information:      
      [
        {
          Title: "Return fire",
          Text: "All personnel (including casualties where able) should return and maintain fire to supress the enemy in order to evacuate to cover",  
        },
        {
          Title: "If medic and casualty in the open",
          Text: "Desplegar granadas de humo en dirección contraria al viento, si es posible. Considera:Torniquete para hemorragias masivas. Colocar al herido boca abajo (vÍas respiratorias) hasta estar listo para moverlo.",  
        },
        {
          Title: "If casualty in the open",
          Text: "If casualty unable to return effective fire, tell them to lie as still as possible. Plan rescue, considering: \n•	Support from friendly forces\n•	Use of vehicles\n•	Use of smoke\n•	Use of cover\n•	Use of rope line\n•	Quickest routes",  
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
      InstructionText: 'Assess S.C.E.N.E',
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
      InstructionText: 'Transmit alert message',
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
      InstructionText: 'Multiple casualties?',
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
      InstructionText: 'Prioritize casualties and treat accordingly',
      InformationButton: true,
      Information:      
      [
        {
          Title: "Prioritize casualties",
          Text: "In circumstances where the number of casualties outweighs the number of responders and resources, decisions must be made to prioritize casualties to ensure the best is done for the most victims.",  
        },
        {
          Title: "Triage",
          Text: "Triage is the process of determining the priority of patients' treatments based on the severity of their condition and can be used to prioritize casualties.\nThe following categories are often used in triage:\n\n•	T1, priority 1 (RED: Immediate). This category has the highest priority for treatment or evacuation as urgent interventions are required to ensure the casualty’s survival. Examples: Airway obstruction, respiratory emergencies, shock and severe trauma.\n\n•	T2, priority 2 (YELLOW: Urgent). This comprises cases that require early treatment, particularly surgery, and it is recommended that evacuation to a surgical facility take place within 6 hours of injury. Examples: major limb injuries and fractures, closed head injury, open eye injury and moderate burns.\n\n•	T3, priority 3 (GREEN: Delayed or hold). Treatment is less urgent in this category and can be deferred if there are other casualties requires limited treatment or evacuation assets. Examples: Closed fractures, soft tissue injury, closed chest injury and facial injury.\n\n•	Dead, priority 4 (BLACK: Expectant or deceased). This category refers to casualties whose injuries or illnesses are so serious that they have minimal chances of survival or who are dead on arrival. Should there be competition for limited medical resources, such cases will have lower priority for evacuation or treatment, despite the severity of their condition.",
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
      InstructionText: 'Massive bleeding?',
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
     InstructionText: 'Bleeding on limbs?',
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
     InstructionText: 'Apply tourniquet',
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
   InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Apply 2nd tourniquet above first',
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
 InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Pack wound',
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
 InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Repack wound and apply pressure for longer',
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
 InstructionText: 'Secure EPD over wound',
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
 InstructionText: 'Pack wound',
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
 InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Is the casualty responding normally?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Shake and shout",
      Text: "•	If the casualty is conscious, ask ‘what happened?’ or ‘where are you hurt?’\n•	If the casualty appears unconscious or has collapsed, shake the casualty and ask ‘are you alright?’\n•	If the casualty responds normally, the person has a clear airway, is breathing and has brain perfusion.\n•	If the casualty speaks only in short sentences, he may have breathing problems. Failure of the casualty to respond is a clear marker of critical illness.",  
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
 InstructionText: 'Is the casualty conscious?',
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
 InstructionText: 'Examine airway and remove potential debris',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Examine airway",
      Text: "If the casualty appears unconscious, open their mouth, inspect the mouth and remove potential debris.",  
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
 InstructionText: 'Open airway by performing head-tilt',
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
 InstructionText: 'Continuing breathing difficulties?',
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
 InstructionText: 'Apply recovery position',
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
 InstructionText: 'Examine airway and let casualty remove debris',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Examine airway",
      Text: "If the casualty is conscious, ask them to remove potential debris from their mouth.",
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
 InstructionText: 'Continuing breathing problems?',
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
 InstructionText: 'Apply sit-up & forward position',
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
 InstructionText: 'Examine chest and back',
 InformationButton: true,
 Information:      
  [
    {
      Title: "full chest assessment",
      Text: "The full chest assessment consists of the following elements:\n•	Look at the chest for bruising, wounds, or lack of symmetry.\n•	Listen for unusual breath sounds.\n•	Feel the chest for abnormalities or wounds (in low light conditions).\n•	Check the armpits of the casualty, wounds can be hidden in the folds of the skin.",
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
 InstructionText: 'Open chest wound?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Open chest wounds",
      Text: "An open chest wound can be caused by the chest wall being penetrated by a bullet, knife blade, shrapnel, or other object. Some of the signs and symptoms of an open chest wound:\n•	Sucking or hissing sounds coming from chest wound.\n•	Casualty coughing up blood.\n•	Frothy blood coming from the chest wound.\n•	Shortness of breath or difficulty in breathing.\n•	Chest not rising normally when the casualty inhales.\n•	Pain in the shoulder or chest area that increases with breathing.\n•	Bluish tint of lips, inside of mouth, fingertips, or nail beds.\n•	Signs of shock such as a rapid and weak heartbeat.",
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
 InstructionText: 'Seal wound',
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
 InstructionText: 'Other open chest wounds?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Open chest wounds",
      Text: "An open chest wound can be caused by the chest wall being penetrated by a bullet, knife blade, shrapnel, or other object. Some of the signs and symptoms of an open chest wound:\n•	Sucking or hissing sounds coming from chest wound.\n•	Casualty coughing up blood.\n•	Frothy blood coming from the chest wound.\n•	Shortness of breath or difficulty in breathing.\n•	Chest not rising normally when the casualty inhales.\n•	Pain in the shoulder or chest area that increases with breathing.\n•	Bluish tint of lips, inside of mouth, fingertips, or nail beds.\n•	Signs of shock such as a rapid and weak heartbeat.",
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
 InstructionText: 'Suspected airway burns?',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Airway burns",
      Text: "Burns to the airway can be caused by inhaling smoke, steam, superheated air, or toxic fumes. Airway burns can be very serious since the rapid swelling of burned tissue in the airway can quickly block the flow of air to the lungs. Symptoms and signs include:\n•	Hoarseness or change in voice.\n•	Harsh cough.\n•	Stridor.\n•	Burns to the face.\n•	Head and neck swelling.\n•	Signed nasal hair, eyebrows or eyelashes.\n•	Soot in the saliva, sputum, nose or mouth.",
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
 InstructionText: 'Cool airway with cold fluids',
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
 InstructionText: 'Perform full body check',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Rapid assessment for bleeding",
      Text: "Use the following procedure:\n•	Reassess any tourniquets applied (still effective?).\n•	Check the head for bleeding.\n•	Check the chest for bleeding.\n•	Check the abdomen (including back).\n•	Check the pelvis.\n•	Check upper legs.\n•	Check the lower legs and arms.",
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
 InstructionText: 'Bleeding?',
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
 InstructionText: 'Massive bleeding?',
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
 InstructionText: 'Bleeding on limbs?',
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
 InstructionText: 'Apply tourniquet',
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
 InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Apply 2nd tourniquet above first',
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
 InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Pack wound',
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
 InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Repack wound and apply pressure for longer',
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
 InstructionText: 'Secure EPD over wound',
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
 InstructionText: 'Pack wound',
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
 InstructionText: 'Bleeding stopped?',
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
 InstructionText: 'Other bleeding wounds?',
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
 InstructionText: 'Abdominal wounds?',
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
 InstructionText: 'Apply wet dressing',
 InformationButton: true,
 Image1: true,
 Information:      
  [
    {
      Title: "Abdominal wound treatment",
      Text: "•	Do not try to touch organs or push organs back into the body cavity.\n•	Cover with a sterile dressing moistened with saline or clean water or with a clean plastic cover taped on all four sides.\n•	Bandage securely but not tightly\n•	Allow casualty to sit or lie in a comfortable position. Possibly with the legs bent, knees raised towards the chest.",  
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
 InstructionText: 'Apply EPD',
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
 InstructionText: 'Suffering from heat cramps, exhaustion or stroke?',
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
 InstructionText: 'Cool casualty',
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
 InstructionText: 'Suffering from hypothermia?',
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
 InstructionText: 'Rewarm casualty',
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
 InstructionText: 'Other casualties?',
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
 InstructionText: 'Can the casualty be handed over to a (forward) medical team?',
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
 InstructionText: 'Reassess MARCH',
 InformationButton: true,
 Information:      
  [
    {
      Title: "Reassess MARCH",
      Text: "When the casualty cannot be transferred to a (forward) medical team yet, the first aider should continue to monitor and reassess MARCH, for example by:\n•	Reassessing previously administered measures such as tourniquets, wound packing, and EPDs for effectiveness.\n•	Verifying that the casualty’s airway is still open.\n•	Verifying that the casualty’s respiration is still adequate. Reassessing chest seals and EPDs.\n•	Reassessing previously administered EPDs.\n•	Reassessing whether the casualty is suffering from hyperthermia or hypothermia.\n•	Making sure the casualty is as comfortable as the person’s situation permits.",  
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
 InstructionText: 'Restart protocol to assist in reassessing march?',
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
 InstructionText: 'End of protocol',
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
 InstructionText: 'Other massive bleeding?',
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
 InstructionText: 'Call medic',
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
 InstructionText: 'Call medic',
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
 InstructionText: 'Apply hypothermia blanket',
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
