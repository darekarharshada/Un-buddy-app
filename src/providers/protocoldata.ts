import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProtocolData {

FirstAidProtocol=[];

constructor(public http: Http) {

    this.FirstAidProtocol = [
      {
        //ASSESS SITUATION
        Step: '0',
        InstructionText: 'Assess the situation',
        InformationButton: true,
        Information: 
        [
          {
            Title: "S.C.E.N.E",
            Text: "The General Scene Assessment is the first evaluation you will make as a First-Aider upon arriving at or witnessing an injury. ",  
          },
          {
            Title: "Safe",
            Text: "As a First-Aider you may be required to respond to a wide variety of situations and environments.   In your assessment of the SCENE you need to identify hazards and control them, before turning your attention to the treatment of the casualty. In the event of ongoing hostility or gunfire, your primary role may be to continue to engage threats to increase the security and safety of the scene. Being distracted from this role, may lead to additional injury. In small-unit operations, the additional firepower provided by the medic may be essential to obtaining the tactical fire superiority needed to negate or reduce the hostile attack. When the threat is reduced, and it is safe to treat the victim, one of the most important aspects of personal safety is ensuring that you are taking appropriate precautions for body substance isolation (BSI).  Body fluids can contain organisms known as pathogens.  Pathogens are organisms such as viruses and bacteria that can cause disease.  At the core of proper BSI precautions is appropriate Personal Protective Equipment (PPE), which includes:\n\n •	Gloves\n\n•	Eye protection",  
          },
          {
            Title: "Cause",
            Text: "Look at the scene around the casualty for clues to what happened and what caused the casualty’s injuries.  Here we are attempting to classify the casualty as either a Trauma or Medical casualty.  Trauma casualties are those that have been affected by outside forces impacting the body. In the United Nations, the most common causes of traumatic injury are:\n\n•	Road Traffic Accident\n\n•	Gunshots\n\n•	Explosions\n\n•	Drowning, and\n\n•	Snakebites\n\nMedical casualties on the other hand, are those that are suffering from a malfunction of one or more of the systems of the body. This may include:\n\n•	Disorders of consciousness (e.gs seizures)\n\n•	Respiratory disorders\n\n•	Heart disorders, and\n\n•	Heat disorders\n\nThe distinction between trauma and medical casualties is an important one as it will dictate how you will approach and manage the casualty.  Always assume that trauma casualties from vehicle accidents and falls from high places have sustained injuries to the neck and spine and treat accordingly.",  
          },
          {
            Title: "Environment",
            Text: "Are there environmental factors impacting on the victim? Environmental factors may include:\n\n•	Standing water or wet victims\n\n•	Extreme heat, cold or direct exposure to the sun or hot surfaces\n\n•	Electrical cables or fallen power lines\n\n•	Oncoming traffic\n\n•	Fire or flammable liquid and vapors",  
          },
          {
            Title: "Number of casualties",
            Text: "In circumstances where the number of casualties outweighs the number of responders and resources, decisions must be made to prioritize casualties to ensure the best is done for the most victims.",  
          },
          {
            Title: "Extra resources",
            Text: "Some incidents may require additional resources to be delivered to the scene to aid in the treatment and evacuation of victims.  As a First-Aider, you are uniquely positioned to identify these needs early, having a direct impact on the time taken to deliver these resources to the incident scene.  Additional resources may include:\n\n•	Medical Personnel\n\n•	Specialist extrication equipment to remove victims trapped in vehicles\n\n•	Fire Suppression assets\n\n•	Quick Reaction Force\n\n•	Fire Support (heavy, direct, indirect or close air)\n\n•	Electricity or Utility stabilization services\n\n•	Helicopters or air evacuation assets\n\n",  
          },
        ],
        InformationPager: true,
        CheckButton: true,
        CheckButtonGoToStepCount: 1,
        YesButton: false,
        YesButtonGoToStepCount: null,
        NoButton: false,
        NoButtonGoToStepCount: null,
        MARCH: 'null',
      },
      {
        //ALERT
        Step: '1',
        InstructionText: 'Transmit alert message',
        InformationButton: true,
        Information: 
        [
          {
            Title: "Basics",
            Text: "An alert message must be transmitted as soon as possible, and no later than 2-minutes after casualties are sustained to ensure rapid access to evacuation assets. The United Nations has adopted a basic 4-line situation report.  Receipt of the alert message by the designated mission Operational Centre triggers the speedy deployment of the Medical Emergency Response Team (MERT) trained and equipped to provide Advanced Lifesaving Support (ALS) , principally to stabilize a casualty.",  
          },
          {
            Title: "4-liner",
            Text: "As a First-Aider, you are expected to be able to initiate this alert message. The four parts of the alert message are:\n\nLocation. Provide the exact location of desired pick-up (e.g. UTM, MGRS, Lat/Long)\n\nIncident: This should include the radio frequency, phone or satellite phone on-scene\n\nActions being taken. What are you doing (e.g. “We are providing first aid on the side of the road”, or “We are self-driving to nearest hospital”\n\nRecourses Required. What do you want?  Is there any special equipment needed at the site (e.g. Hoist, Extrication Equipment, Ventilators)?",  
          },
        ],
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
        //ASSESS CASUALTIES
        Step: '2',
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
        YesButtonGoToStepCount: 3, 
        NoButton: true,
        NoButtonGoToStepCount: 4, 
        MARCH: 'null',
      },

      {
        //PRIORITIZE CASUALTIES
        Step: '3',
        InstructionText: 'Prioritize casualties',
        InformationButton: true,
        Information:      
        [
          {
            Text: "In circumstances where the number of casualties outweighs the number of responders and resources, decisions must be made to prioritize casualties to ensure the best is done for the most victims.",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 4,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'null',
        MultipleCasualties: true, //more than one casualty
      },

      {
         //ASSESS MASSIVE BLEEDING
        Step: '4',
        InstructionText: 'Massive bleeding?',
        InformationButton: false,
        Information:      
        [
          {
            Text: "Any bleeding that is life threatening should be stopped and controlled immediately. A victim with massive bleeding can die in as little as 2-3 minutes if the bleeding is not controlled quickly.  At this stage of the Primary Assessment, the preferred treatments are:\n\n1.	Tourniquet for any massive bleeding from the arms or legs.\n\n2.	Wounds that are not amendable to Tourniquet placement should be packed using conforming gauze dressing with direct pressure for at least 3-5 minutes.\n\n",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 5, 
        NoButton: true,
        NoButtonGoToStepCount: 8,
        MARCH: 'M',       
      },

      {
        //STOP MASSIVE BLEEDING
        Step: '5',
        InstructionText: 'Stop bleeding using tourniquet or direct pressure',
        InformationButton: true,
        Information:      
        [
          {
            Text: "Any bleeding that is life threatening should be stopped and controlled immediately. A victim with massive bleeding can die in as little as 2-3 minutes if the bleeding is not controlled quickly.  At this stage of the Primary Assessment, the preferred treatments are:\n\n1.	Tourniquet for any massive bleeding from the arms or legs.\n\n2.	Wounds that are not amendable to Tourniquet placement should be packed using conforming gauze dressing with direct pressure for at least 3-5 minutes.\n\n",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 8,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'M',  
        MassiveBleeding: true, //MassiveBleeding  
      },

      {
        //ASSESS SPINE INJURY
        Step: '6', //ommitted UN
        InstructionText: 'Possible C-spine injury?',
        InformationButton: true,
        Information:      
        [
          {
            Text: "Always assume that trauma casualties from vehicle accidents and falls from high places have sustained injuries to the neck and spine.\n\n",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 7, 
        NoButton: true,
        NoButtonGoToStepCount: 8, 
        MARCH: 'A',  
      },

      {
        //IMMOBILISE SPINE
        Step: '7',//ommitted UN
        InstructionText: 'Immobilise C-spine',
        InformationButton: false,
        Information:      
        [
          {
            Text: "Always assume that trauma casualties from vehicle accidents and falls from high places have sustained injuries to the neck and spine.\n\n",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 8,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'A',  
      },

      {
        //CHECK AIRWAY
        Step: '8',
        InstructionText: 'Check airway',
        InformationButton: true,
        Information:      
        [
          {
            Text: "The casualty’s airway should be evaluated next to ensure that it is open and free from obstruction which could be in the form of blood, saliva or any other substance gathering in the airway and interfering with the supply of air to and from the lungs. The fastest way to open a casualty’s airway is to use manual maneuvers such as the ‘head tilt/chin lift’ or ‘recovery position’. If the casualty is talking, crying or screaming, these behaviors themselves can indicate that the victim has control of their airway and that it is open.",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 9,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'A',  
      },

      {
        //CONSIOUS?
        Step: '9',
        InstructionText: 'Is the casualty consious?',
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
        YesButtonGoToStepCount: 10,
        NoButton: true,
        NoButtonGoToStepCount: 11, 
        MARCH: 'A',  

      },

      {
        //CONSIOUS OBSTRUCTION OF AIRWAY 
        Step: '10',
        InstructionText: 'Is there an obstruction of the airway?',
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
        YesButtonGoToStepCount: 12, 
        NoButton: true,
        NoButtonGoToStepCount: 18, 
        MARCH: 'A',  
        Consious: true,
      },

      {
        //UNCONSIOUS OBSTRUCTION OF AIRWAY 
        Step: '11',
        InstructionText: 'Is there an obstruction of the airway?',
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
        YesButtonGoToStepCount: 13, 
        NoButton: true,
        NoButtonGoToStepCount: 18, 
        MARCH: 'A',  
        Consious: true,
      },

      {
        //CLEAR MOUTH
        Step: '12',
        InstructionText: 'Let casuality clear mouth',
        InformationButton: false,
        Information:      
        [
          {
            Text: "",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 14,//TBD
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'A',  
        Consious: true,
      },

      {
        //HEAD-TILT/CHIN LIFT
        Step: '13',
        InstructionText: 'Perform head tilt or chin lift',
        InformationButton: true,
        Information:      
        [
          {
            Text: "The Head Tilt/Chin Lift technique is used to most rapidly open the casualty’s upper airway. The technique is carried out by using one hand to place downward pressure on the casualty’s forehead, while using your other hand to raise the chin and jaw of the victim, extending the head and neck backward. The technique does apply pressure to the cervical spine of the casualty and should be avoided in circumstances while where there is a high suspicion of neck injury (e.g. vehicle accidents, falls, strikes/impacts to the head or explosions that cause the casualty to be propelled through the air.",  
            Image1: true,
            ImageURL: "/assets/imgs/Airway/Headtilt.png",
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 16,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'A',  
        Consious: true,
      },

      {
        //CONSIOUS ASSESS BREATHING DIFFICULTIES
        Step: '14',
        InstructionText: 'Breathing difficulties?',
        InformationButton: false,
        Information:      
        [
          {
            Text: "Casualties that are conscious and experiencing breathing difficulty should be permitted to adopt the ‘Sit Up & Forward Position’. Particularly those with severe facial trauma may be able to best maintain their airway by leaning forward and allowing blood, tissue, and fluid to naturally drain free. \n\nCasualties permitted to adopt this position should be closely monitored for changes in their mental status or consciousness. If the casualty loses consciousness, the casualty should be assisted into the Recovery Position.",  
            Image1: true,
            ImageURL: "/assets/imgs/Airway/SittingPosition.png",
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 15, 
        NoButton: true,
        NoButtonGoToStepCount: 18, 
        MARCH: 'A',  
      },

      {
        //CONSIOUS ALLOW SIT-UP AND FORWARD
        Step: '15',
        InstructionText: 'Apply sit up & forward position',
        InformationButton: true,
        Information:      
        [
          {
            Text: "Casualties that are conscious and experiencing breathing difficulty should be permitted to adopt the ‘Sit Up & Forward Position’. Particularly those with severe facial trauma may be able to best maintain their airway by leaning forward and allowing blood, tissue, and fluid to naturally drain free. \n\nCasualties permitted to adopt this position should be closely monitored for changes in their mental status or consciousness. If the casualty loses consciousness, the casualty should be assisted into the Recovery Position.",  
            Image1: true,
            ImageURL: "/assets/imgs/Airway/SittingPosition.png",
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 18,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'A',  
      },

      {
        //UNCONSIOUS ASSESS BREATHING DIFFICULTIES
        Step: '16',
        InstructionText: 'Breathing difficulties?',
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
        YesButtonGoToStepCount: 17, 
        NoButton: true,
        NoButtonGoToStepCount: 18, 
        MARCH: 'A',  
      },

      {
        //RECOVERY POSITION
        Step: '17',
        InstructionText: 'Apply recovery position',
        InformationButton: true,
        Information:      
        [
          {
            Text: "The recovery position allows for an unconscious casualty to maintain their own airway by allowing the tongue to stay forward of the airway and to drain any aspirated fluid. The Recovery Position is best used for unconscious medical casualties and trauma casualties without spinal injury.\n\n Additionally, casualties that display signs of fluid in their airway should be moved into the recovery position to drain the airway, preventing damage to the lungs.\n\n The Recovery Position is described as the casualty laying on their side, with their head resting on their hand or arm, and their knee forward to increase stability.  The left side down position reduces the likelihood of fluid from the stomach travelling into the airway. Casualties should be repositioned side to side every 30-minutes to reduce the likelihood of pressure sores developing, while casualties with chest injuries should be positioned with the injured side down.",  
            Image1: true,
            ImageURL: "/assets/imgs/Airway/RecoveryPosition.png",
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 18,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'A',  
      },

      {
        //ASSESS CHEST
        Step: '18',
        InstructionText: 'Examine chest',
        InformationButton: true,
        Information:      
        [
          {
            Text: "The brain begins to suffer irreversible damage in as little as 3-4 minutes, if it does not receive enough oxygen. Oxygen enters the body through the airway and is exchanged in to the blood through the lungs.  For this to occur a victim must be able to breath at both a normal speed and depth.   It is pointless to evaluate breathing if the airway is obstructed so, after first clearing and opening the airway, you as a First-Aider must evaluate breathing (aka. Respirations) and assist the casualty to breathe if necessary.",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 19,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'R',  
      },

      {
        //ASSESS OPEN CHESTWOUND
        Step: '19',
        InstructionText: 'Open chest wound?',
        InformationButton: true,
        Information:      
        [
          {
            Text: "Any injury on the front or back of the casualty’s torso above the navel should be treated as a Chest Injury. As mentioned in previous modules, any wound with severe bleeding must be addressed first using tourniquets or wound packing. However, many chest injuries bleed only a little and may be seen or heard to “bubble or hiss.”",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 20, 
        NoButton: true,
        NoButtonGoToStepCount: 21, 
        MARCH: 'R',  
      },

      {
        //SEAL OPEN CHESTWOUND
        Step: '20',
        InstructionText: 'Seal injury',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Basics",
            Text: "As soon as a chest injury is identified, the First-Aider should take immediate steps to seal the injury and prevent air from entering.  This can be achieved by:\n\na)	Placing your gloved hand over the wound, or\n\nb)	Instructing the casualty to apply sideways pressure to the wound to shift the muscle tissue, closing the wound.\n\nAfter these immediate interventions, an occlusive dressing should be retrieved from the casualty’s Individual First Aid Kit.  Prior to applying the occlusive dressing, the area should be wiped clean of debris, blood and/or sweat to aid the occlusive dressing in sticking to the skin surrounding the wound.\n\nIf using a commercial Chest Seal, ensure that the valve (if present) is positioned directly over the open wound. If a commercial Chest Seal is not available, duct tape or medical tape can be used on all four sides of a plastic cover, leaving a corner open to allow for drainage.",  
            Image1: true,
            ImageURL: "/assets/imgs/Airway/CommercialChestSeal.png",
            Image2: true,
            ImageURL2: "/assets/imgs/Airway/ImprovisedChestSeal.png",
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 21,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'R',  
      },

      {
        //RECHECK Tourniquet
        Step: '21',
        InstructionText: 'Check previously administered measures (tourniquet)',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Why?",
            Text: "Why do this step",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 22,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'C',  
      },

      {
        //ASSESS OTHER BLEEDING
        Step: '22',
        InstructionText: 'Check for other bleeding wounds',
        InformationButton: true,
        Information:      
        [
          {
            Title: "How?",
            Text: "How and where to look",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 23,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'C',  
      },

      {
        //WOUNDS FOUND?
        Step: '23',
        InstructionText: 'Other bleeding wounds?',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Why?",
            Text: "Why do this step",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 24, 
        NoButton: true,
        NoButtonGoToStepCount: 28, 
        MARCH: 'C',  
      },


      {
        //ARTERIAL BLEEDING?
        Step: '24',
        InstructionText: 'Severe arterial bleeding?',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Why?",
            Text: "Why do this step",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 25, 
        NoButton: true,
        NoButtonGoToStepCount: 27, 
        MARCH: 'C',  
      },

      {
        //STOP ARTERIAL BLEEDING
        Step: '25',
        InstructionText: 'Stop bleeding using tourniquet or direct pressure',
        InformationButton: true,
        Information:      
        [
          {
            Text: "Any bleeding that is life threatening should be stopped and controlled immediately. A victim with massive bleeding can die in as little as 2-3 minutes if the bleeding is not controlled quickly.  At this stage of the Primary Assessment, the preferred treatments are:\n\n1.	Tourniquet for any massive bleeding from the arms or legs.\n\n2.	Wounds that are not amendable to Tourniquet placement should be packed using conforming gauze dressing with direct pressure for at least 3-5 minutes.\n\n",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 26,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'C',  
        MassiveBleeding: true, //MassiveBleeding  
      },

      {
        //WOUNDS FOUND?
        Step: '26',
        InstructionText: 'Other bleeding wounds?',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Why?",
            Text: "Why do this step",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 27, 
        NoButton: true,
        NoButtonGoToStepCount: 28, 
        MARCH: 'C',  
      },

      {
        //ADDRESS BLEEDING WOUNDS
        Step: '27',
        InstructionText: 'Apply pressure bandage (EPD)',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Basics",
            Text: "The Emergency Pressure Dressing (EPD) was designed specifically with military application in mind and comes contained within double vacuum sealed, water proof packaging.  The bandage is available in various sizes (10cm, 15cm and 25cm) and consists of the following parts:\n\n•	A high-quality green colored elastic bandage\n\n•	A large white colored sterile wound dressing pad\n\n•	A plastic tension bar, attached over the center of the dressing pad\n\n•	A plastic securing clips included in running end of the bandage.",  
          },
          {
            Title: "Application",
            Text: "Before using an EPD, attempts must be made to control all severe bleeding using either tourniquet application or wound packing techniques as explained in previous chapters. The EPD should be used in the following manner:\n\na)	Upon opening the packaging of the EPD, stow the plastic wrapper for later use.\n\nb)	Unfold the EPD taking care to not touch or contaminate the white dressing pad.\n\nc)	Apply the EPD with two hands placing the dressing pad over the wound. The plastic Tension Bar should be placed directly over the center of the wound\n\nd)	Apply equal pressure with both sides of the EPD bandage and wrap the bandage around the limb or torso maintaining constant pressure. e)	Wrap the bandage around both edges of the dressing pad in a ‘V’ shape with the Tension Bar still visible.\n\note: If the EPD is being used to wrap the torso, every effort should be made to apply the bandage while the casualty takes and holds a deep breath. Failing to do so may restrict the casualty’s breathing. Breathing should be monitored closely.\n\nf)	Place the bandage through the Tension Bar and reverse the direction of the bandage, folding down the Tension Bar to place additional pressure directly over the wound site.\n\ng)	Continue wrapping the bandage and secure the running end by tucking the plastic clips into bandage wraps.\n\nh)	After applying any elastic bandage, circulation, sensation and motor function (CSM) should be monitored. Changes in CSM may indicate that the EPD is reducing or preventing adequate blood circulation to the limb in which case, the bandage may need to be loosened. The wound should be reassessed and checked for CSM function every 5 minutes, until appropriate medical care arrives.",  
          },
        ],
        InformationPager: true,
        CheckButton: true,
        CheckButtonGoToStepCount: 28,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'C',  
      },

      {
        //CHECK AVPU
        Step: '28',
        InstructionText: 'Check level of responsiveness using AVPU',
        InformationButton: true,
        Information:      
        [
          {
            Title: "AVPU scale",
            Text: "The AVPU scale is a simple 4-level scale to evaluate a casualty’s Level of Responsiveness that is used quite commonly by pre-hospital professionals around the globe. The AVPU test is used to evaluate Circulation within the MARCH protocol.\n\n•	Alert – casualty is able to converse and answer simple questions/hand gestures\n\n•	Voice / Sound – casualty response spontaneously to sound or noise stimulus\n\n•	Pain – casualty responds to painful stimulus\n\n•	Unresponsive – casualty does not respond to painful stimulus",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 29,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'C',  
      },

      {
        //CONSIOUS?
        Step: '29',
        InstructionText: 'Is the casualty unconsious?',
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
        YesButtonGoToStepCount: 30,
        NoButton: true,
        NoButtonGoToStepCount: 31, 
        MARCH: 'C',  

      },


      {
        //IF UNCONSIOUS 
        Step: '30',
        InstructionText: 'Apply recovery position',
        InformationButton: true,
        Information:      
        [
          {
            Text: "The recovery position allows for an unconscious casualty to maintain their own airway by allowing the tongue to stay forward of the airway and to drain any aspirated fluid. The Recovery Position is best used for unconscious medical casualties and trauma casualties without spinal injury.\n\n Additionally, casualties that display signs of fluid in their airway should be moved into the recovery position to drain the airway, preventing damage to the lungs.\n\n The Recovery Position is described as the casualty laying on their side, with their head resting on their hand or arm, and their knee forward to increase stability.  The left side down position reduces the likelihood of fluid from the stomach travelling into the airway. Casualties should be repositioned side to side every 30-minutes to reduce the likelihood of pressure sores developing, while casualties with chest injuries should be positioned with the injured side down.",  
            Image1: true,
            ImageURL: "/assets/imgs/Airway/RecoveryPosition.png",
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 31,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'C',  
      },
                
      {
        //Core temperature
        Step: '31',
        InstructionText: 'Check core temperature',
        InformationButton: true,
        Information:      
        [
          {
            Title: "HOW?",//Check
            Text: "Most victims with blood loss lose body heat quickly, even in hot environments. When the body loses blood, it draws what blood is left, toward the center of the body, leaving the skin feeling cold to touch. A drop in the victim’s body temperature leads to the casualty bleeding more and must be controlled quickly. Keep the victim warm by exchanging wet clothing for dry clothing and wrapping the casualty in blankets or other warm material.",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 32,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'H',  
      },

      {
        //Hi or lo
        Step: '32',
        InstructionText: 'Temperature lower than 32 degrees Celcius?',
        InformationButton: true,
        Information:      
        [
          {
            Title: "HOW?",//Check
            Text: "Most victims with blood loss lose body heat quickly, even in hot environments. When the body loses blood, it draws what blood is left, toward the center of the body, leaving the skin feeling cold to touch. A drop in the victim’s body temperature leads to the casualty bleeding more and must be controlled quickly. Keep the victim warm by exchanging wet clothing for dry clothing and wrapping the casualty in blankets or other warm material.",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 33, 
        NoButton: true,
        NoButtonGoToStepCount: 34, 
        MARCH: 'H',  
      },

      {
        //LOWER than 32degrees
        Step: '33',
        InstructionText: 'Use hypothermia wrap',
        InformationButton: true,
        Information:      
        [
          {
            Title: "HOW?",//Check
            Text: "If action is not taken to correct mild hypothermia, the casualty’s condition may continue to worsen, to the point that the casualty develops Severe Hypothermia (<32ºC) which is characterized by a loss of consciousness. This severe condition should be treated by a Hypothermia Wrap.\n\nA Hypothermia Wrap is intended to retain as much body warmth as possible to allow the casualty’s natural heating mechanisms to restore core body temperature.\n\nCasualty’s should have any wet clothing replaced with warm natural fibers such as wool and should be wrapped in multiple layers of clothing and other insulation material including sleeping bags rain protective gear and tents or tarpaulins.\n\nThe Hypothermia Wrap should not be opened to check on the casualty therefore, the sharing of body warmth (a healthy person sharing the hypothermia wrap with the casualty), is not recommended as the constant opening and closing of the hypothermia wrap significantly reduces its effectiveness.",  
            Image1: true,
            ImageURL: "/assets/imgs/Airway/HypothermiaWrap.png",
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 36,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'H',  
      },

      {
        //Hi or lo
        Step: '34',
        InstructionText: 'Temperature between  32-36 degrees Celcius?',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Basics",//Check
            Text: "Most victims with blood loss lose body heat quickly, even in hot environments. When the body loses blood, it draws what blood is left, toward the center of the body, leaving the skin feeling cold to touch. A drop in the victim’s body temperature leads to the casualty bleeding more and must be controlled quickly. Keep the victim warm by exchanging wet clothing for dry clothing and wrapping the casualty in blankets or other warm material.",  
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 35, 
        NoButton: true,
        NoButtonGoToStepCount: 36, 
        MARCH: 'H',  
      },

      {
        //BETWEEN 32-36degrees
        Step: '35',
        InstructionText: 'Take measures to treat mild hypothermia',
        InformationButton: true,
        Information:      
        [
          {
            Title: "Mild hypothermia",//Check
            Text: "In some Mission areas, it may be possible for personnel to become severely hypothermic due to environmental conditions or prolonged sedentary outdoor duties when wet or exposed to high winds. In such cases, where the body temperature drops below 32ºC, hypothermia can lead to collapse and death.  Signs of mild hypothermia (36ºC-32ºC) are identified by:\n\n•	Shivering\n\n•	Grumbling (complaining)\n\n•	Mumbling\n\n•	Stumbling (tripping or having difficulty standing/walking)\n\n•	Fumbling (not able to hold or operate objects properly with your hands)\n\n•	Tumbling (falling or collapsing)\n\nTreatment for Hypothermia includes:\n\n•	Removal from cold environment\n\n•	Removal and replacement of wet clothing\n\n•	Light physical activity (if safe to do so)\n\n•	Consuming warm liquid (e.g. tea or soup)",  
          },
        ],
        InformationPager: false,
        CheckButton: true,
        CheckButtonGoToStepCount: 36,
        YesButton: false,
        YesButtonGoToStepCount: null, 
        NoButton: false,
        NoButtonGoToStepCount: null, 
        MARCH: 'H',  
      },

      {
        //Final step WHAT TO TO?
        Step: '36',
        InstructionText: 'End of protocol',
        InformationButton: true,
        Information:      
        [
          {
            Title: "",
            Text: "",
          },
        ],
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
        //Final step WHAT TO TO?
        Step: '37',
        InstructionText: 'Other casualties?',
        InformationButton: true,
        Information:      
        [
          {
            Title: "",
            Text: "",
          },
        ],
        InformationPager: false,
        CheckButton: false,
        CheckButtonGoToStepCount: null,
        YesButton: true,
        YesButtonGoToStepCount: 4, 
        NoButton: true,
        NoButtonGoToStepCount: 36, 
        MARCH: null,  
      }, 
    ]
  }}
