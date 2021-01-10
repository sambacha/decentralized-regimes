# MIP0: The Maker Improvement Proposal Framework

## Preamble
```
MIP#: 0
Title: The Maker Improvement Proposal Framework
Author(s): Charles St.Louis (@CPSTL), Rune Christensen (@Rune23)
Contributors: @LongForWisdom
Type: Process
Status: Accepted 
Date Proposed: 2020-04-06
Date Ratified: 2020-05-02
Dependencies: n/a
Replaces: n/a
```
## References
**[General-MIP-Template.md](General-MIP-Template.md)**  
**[Technical-MIP-Template.md](Technical-MIP-Template.md)**  
**[MIP0c12-Subproposal-Template.md](MIP0c12-Subproposal-Template.md)**  
**[MIP0c13-Subproposal-Template.md](MIP0c13-Subproposal-Template.md)**  

## Sentence Summary

MIP0 defines and describes the MIPs Framework. 

## Paragraph Summary

MIP0 is the genesis proposal describing the MIPs Framework. This includes the core components and statuses as well as the various MIP types and the overall MIP lifecycle. Furthermore, it provides the necessary tools, such as MIP templates, replacement processes, and dependencies. Lastly, the proposal details the key roles of the framework, the MIP Editor and the Governance Facilitator along with the process for adding and removing them.

## Component Summary

**MIP0c1: Definitions of the Maker Improvement Proposal Framework**  
Defines several concepts that are important for understanding the MIPs process.

**MIP0c2: Core Principles**  
Discusses some core principles that all MIPs should aim to follow.

**MIP0c3: The MIP Lifecycle**  
Lays out how a MIP is created and moves through the process to become Accepted or Rejected.

**MIP0c4: MIP Components and MIP Component Types**  
Discusses the use of components to compartmentalize and organise MIPs

**MIP0c5: MIP Replacement Process**  
Discusses how MIPs can be replaced and the steps to be taken to maintain dependencies.

**MIP0c6: Supporting Materials**
A component that defines how to include external materials inside MIPs.

**MIP0c7: MIP Templates**  
Defines the MIP templates for both General and Technical MIPs.

**MIP0c8: MIP0 Domain Role Dependencies**  
Defines the core roles that the MIPs process requires to operate successfully.

**MIP0c9: Core Personnel Role List**  
List of of personnel currently occupying core roles.

**MIP0c10: MIP Editor Role**  
A component that defines the responsibilities, criteria and grounds for removal of the MIP Editor role.

**MIP0c11: Governance Facilitator Role**  
A component that defines the responsibilities, criteria and grounds for removal of the Governance Facilitator role.

**MIP0c12: Core Personnel Onboarding**  
A process component that defines the process to add personnel to the MIP Editor or Governance Facilitator roles.

**MIP0c13: Core Personnel Offboarding**  
A process component that defines the process to remove personnel from the MIP Editor or Governance Facilitator roles.


## Motivation

MakerDAO is evolving into an organization that is trustless, fully decentralized, open-sourced, and self-sustainable. In order to further enable this gradual evolution while maintaining governance functionality both during this process and after the dissolution of the Maker Foundation, Maker will be governed using Maker Improvement Proposals (MIPs).

The purpose of the MIPs Framework is to open up the ability to improve Maker Governance and the Maker Protocol to anyone in the community.

By empowering the participation of the community and other stakeholders to have a standard approach to proposing improvements, specifications, or process and state changes, the goal is to enable organic growth that will in turn bring MakerDAO closer to self-sustainability.

In order for MIPs to be functional they need to comply with a basic standard outlining their internal structure and external dependencies. This standard is MIPs described in MIP0, the Maker Improvement Proposal Framework.


## Specification / Proposal Details

### MIP0c1: Definitions of the Maker Improvement Proposal Framework

- **Maker Improvement Proposals (MIPs):** are the preferred mechanism for improving Maker Governance and the Maker Protocol. Through an open and documented process, the goal is to collect as much community feedback as possible and reach the broadest possible consensus on how the Maker Protocol should evolve. A proposal clearly defines how and why Maker Governance or the Maker Protocol should be changed and ensures that this improvement is introduced in a responsible way, respecting the highest quality, security and community standards.
-   **MIP0:** The genesis MIP defining the MIPs framework. This MIP defines all of the processes that are required for the implementation of future MIPs. 
-   **MIP Sets:** A MIP set is a group of several MIPs that are interdependent, in which without the entire set of MIPs existing, one or more MIPs in the Set become inconsistent, invalid or nonsensical. The intention is for MIP sets to together describe a single complex behaviour in such a way that allows each individual MIP to be written following the principle of Specificity but work together as a cohesive modular whole.
-   **MIP Types:** MIPs are separated into a number of types, and each type has its own list of MIPs and processes.
-   **Process MIP:** Process MIPs are used to create and define a specific recurring process that the Maker Protocol or Governance will employ.
-   **Subproposals (SPs):** A subproposal is an instance of a sub-process that has been defined by a specific MIP. Subproposals are named in the following format: MIP0-SP1 (where MIP0 is a Process MIP and MIP0-SP1 is a subproposal under that Process MIP)  
-   **Minimum Feedback Period:** The minimum amount of time within which the community is able to give feedback in response to a proposed MIP.  
-   **Minimum Frozen Period:** The minimum amount of time during which a MIP must remain unchanged (frozen) before it can be submitted for ratification/implementation.
-   **Governance Facilitator(s):** Governance Facilitators are tasked with ensuring the smooth operation of the governance process. This involves a wide range of activities, anything from general administration to signals gathering to governance scheduling.
-  **MIP Editor(s):** Enforce the administrative and editorial aspects of the overall MIPs process and program. The expectation is that the program will start out with an interim editor from the Maker Foundation and that others will join later.
-   **Domain Teams**: Domain Teams work for the DAO, are onboarded through governance and are paid by the Protocol. Domain teams perform defined duties for the DAO, such as overseeing critical processes and mitigating risk. These teams consist of but are not limited to Risk, Oracles, Smart Contracts or Legal. 
    

---
### MIP0c2: Core Principles

 1. **Specificity:** A MIP needs to define and address a specific behaviour or single responsibility. MIPs with many different behaviours or responsibilities will not be allowed and must be split up into multiple MIPs.
	 - This mitigates the risk of having “fine print” or potential attacks hidden in large, complex MIPs.
 2. **Completeness:** A MIP or MIP Set is complete if it has all the necessary or appropriate parts that cover a whole behaviour and avoids being only a specific part of a greater whole.
	 - This is important for both understandability, readability and accessibility of MIPs.
3.  **Avoid overlap:** Multiple MIPs should not implement the same type of behaviour independently. For instance, there should not be two separate but interchangeable ways to do collateral onboarding.
	- This way the primary and best-understood process for each particular behaviour will be fairly available to everyone, without risking having a knowledge gap that makes it possible for some actors with better access to information to use different and potentially better processes
4. **Clarity:** A MIP must not have equally valid conflicting interpretations. MIP Authors and MIP Editors must strive to reduce ambiguity. A MIP must be as clear and easy to understand as possible.
	- Any ambiguous MIPs are likely to cause contention or confusion in the future. Making everything as clear as possible also aids readability and helps to mitigate the risk of hidden attacks.
5. **Brevity:** A MIP must be as short as possible, including only that which is essential given the other core principles.
	- The shorter MIPs are the more likely participants in governance are to read them in full. This also serves to reduce the surface area for hidden attacks.
	
---

### MIP0c3: The MIP Lifecycle

**The MIP Lifecycle Flow and MIP Statuses**

![mip_life_cycle](https://user-images.githubusercontent.com/32653033/79086728-19d93900-7d0b-11ea-8086-c255d919096c.png)


**MIP Status Criteria**  

**1. Conception:** The lifecycle of a MIP begins when the MIP proposal is posted on the Maker forum. However, in order for a MIP to move to the next stage, it needs to satisfy the transition criteria (1) described below:

-   Submitted to the MIPs Discourse Forum.
-   Submitted to the MIPs Github repository (with a Pull Request created by the MIP Author or MIP Editor).
-   The format must follow the appropriate MIP Template for its type.
-   MIPs must be original or replacement versions of older MIPs (No repeats allowed).

**2. Approved by MIP Editor(s):** This phase of a MIP’s life cycle is when the MIP Editor(s) confirms that the proposed MIP follows the correct structure and editorial criteria defined in the MIP template. If the criteria is not met, the MIP Editor(s) will provide an explanation to the MIP Author as to why and allow them to make the appropriate changes before reconsideration. If the criteria have been met, the MIP Editor(s) performs the following actions:
    
-   The MIP is approved by a MIP Editor(s) and is assigned a formal MIP number.
-   The PR is merged in by a MIP Editor(s).

**3. Request for Comments (RFC):** This phase is when a MIP goes through a formal review period, including feedback from the community, further drafting and additions. The timeline for the RFC phase is defined by its Feedback Period and Frozen Period. In order to move to the next phase, it needs to satisfy the transition criteria listed below:
     
 - MIP Author finalizes changes of the MIP, based on community feedback.
 - MIPs have a Feedback Period of 3 months. The RFC phase lasts at least 3 months before the MIP can move to the next phase. 
 - MIPs have a Frozen Period of 1 month. MIPs must not have had any changes for the last 1 month before they move to the next phase.

**4. Fulfilled Feedback Period Requirements:** This status is given once the MIP has fulfilled the defined Feedback Period and Frozen Period. After the MIP has waited out its Feedback Period and Frozen Period, it’s ready for Formal Submission. Note that the Feedback Period and Frozen Period can overlap.

**5. Formal Submission (FS):** This phase is when MIP Authors submit their complete MIP(s) to the Governance cycle by posting it to the formal submission forum category within the formal submission window of a governance cycle.
    - A MIP can be re-submitted to the formal submission process a maximum of 2 additional times (3 total), without having to go through phase 1- 4 again, if it failed to pass due to legitimate external reasons (e.g. got bundled in a governance poll or executive vote with a controversial proposal - subject to the governance facilitators judgement).
  
**6. Approved by the Governance Facilitator(s):** This phase is when the MIP must be formally approved by the Governance Facilitators.   

- Once approved by the Governance Facilitator, the MIP will be included in the inclusion poll of the Governance cycle.
- If the MIP is not approved by the Governance Facilitator, it may be reconsidered at a later date to enter the Governance cycle. 
    
**7. Governance Cycle:** This phase is when MKR holders vote on whether to include the MIP in the governance poll, ultimately determining whether or not the MIP can formally enter the governance cycle.
- Once approved for the governance poll, MKR holders determine whether to accept or reject the package of proposals in the governance poll and finally to ratify the result in the executive vote.  

**8. Executive Vote:** This phase is when the MIP becomes officially ratified or not. Determined by MKR holders, the executive vote ultimately accepts or rejects the MIP.  

**9. Accepted/Rejected:** The Executive vote results in either acceptance or rejection of the MIP. If passed, the MIP is officially accepted and is given the accepted status. If the executive vote fails to pass before expiring, the MIP is rejected.
- As described in phase 5, a rejected MIP, can be resubmitted, and in some cases (if it was rejected for provable extraneous explanation) may be allowed to enter the next Governance cycle immediately.  
      

**Other MIP Statuses:**  
     

**Withdrawn:** when a MIP Author withdraws their MIP proposal, such as when:

 - A MIP may be withdrawn at any point before it enters the Governance cycle. 
 - Note that a withdrawn proposal can be taken over from the original Author with a simple transition facilitated by a MIP Editor(s) and the respective parties. If the original MIP Author ceases to be available, the MIP Editor(s) may proceed with the transfer of Authors.

**Deferred:** when a proposal has been deemed as not ready or not a priority but can be re-proposed at a later date.
-   Request for Comments (RFC) - Forum poll/signal request rejects a MIP Proposal.

**Obsolete:** when a proposal is no longer used or is out of date, such as:
    
-   A MIP is replaced with a new proposal.
-   A MIP has been deferred for over 6 months.
-   A MIP Author has abandoned the proposal and no person has communicated willingness to take over MIP Author responsibility.
-   A MIP has been replaced by a newer, more updated MIP Proposal.
-   A MIP no longer makes sense to keep in consideration.
    
  
**MIP Status Change Process:**
    

A status change for a MIP is requested by the MIP Author and will be reviewed by the MIP Editor(s) to see if it meets the status criteria of the requested status change. If it does, the Editor(s) will change the status of the MIP and the Author may proceed with the next stage of the process. If it does not, the MIP Editor(s) will revert with highlighted issues, and the Author must fix the highlighted issues before requesting another status change.
    
---
### MIP0c4: MIP Components and MIP Component Types


**MIP Components**

- When necessary, MIPs can have multiple components if it needs to contain multiple units of logic to satisfy completeness. A MIP can also have only a single component.
- MIP components are categorized by types, depending on what kind of logic they contain. MIP components are named by their parent MIP. The abbreviation convention MIPXcY is used to refer to these components (as seen in this document).
- A MIP component has one type or no types. 


**Component Types**
    
-   **Process MIP Component**  
      
    **Summary:** The purpose of a Process MIP component is to shape a specific process flow for the Maker community to adopt and standardize with respect to how governance operates. This MIP component type helps streamline specific processes in a transparent, open and traceable manner. A Process MIP will provide a publicly documented scope of a proposed process framework as well as a detailed description of the subproposal structure.  
      
    **Special Template:** N/A  
      
    **Important Notes:**  

	-   A Process MIP component must define the Feedback Period and Frozen Period for its sub proposals.
	-   Sub proposals of Process MIP components with additional MIP Component types inherit the same types.  
      
    

-   **Subproposals**  
      
    **Summary:** A subproposal is an expedited process that is defined within a MIP to serve as a definition of how to run a given process within the MIPs framework. 

- Subproposals require a template, a feedback period and a frozen period and are submitted using that template. Subproposals go through the MIPs process in the same way that full MIPs do. The template, feedback period and frozen period for a set of subproposals are defined using a MIP component known as a Process component. Any MIP containing a Process Component gains the Process type.
- The subproposal naming convention is MIPXcY-SPZ where Y is the Process Component that contains the subproposal template and X is the MIP containing that component. This is important in order to delineate between different types of subproposal defined in the same MIP under different Process components.
   
**Special Template:** N/A  
  
---

### MIP0c5: MIP Replacement Process

A MIP can define one or more replacement targets in its preamble. If the MIP is given the accepted status, the replacement target(s) MIPs then receive the Obsolete status and effectively become inactive. The replaced MIP will in its MIP document contain the number of the MIP that replaced it, and other MIPs that depend on the replaced MIP, will instead interact with the new MIP.

Due to the fact that the dependencies carry over, a MIP with defined replacement targets must, in order to be valid, strictly adhere to dependency requirements and interface correctly with MIPs that depend on the replaced MIP, and thus after the replacement with the new MIP.  

---

### MIP0c6: Supporting Materials

MIPs can optionally refer to external materials. External materials must be added to the MIPs github in the same folder as the MIP which references them.

Externally referenced materials are not MIP content, and are not ratified when a MIP becomes Accepted unless it is explicitly stated otherwise in a MIP Component specification.

---

### MIP0c7: MIP Templates

**General MIP Template**
- The General MIP Template should be used for MIPs whenever a more specific ratified template is not more appropriate. 
- The General MIP Template is located at **[General-MIP-Template.md](General-MIP-Template.md)**. This template is considered ratified once this MIP moves to Accepted status.

**Technical MIP Template**
- The Technical MIP Template should be used for MIPs whenever a MIP proposes changes to the smart contract code within the Maker Protocol.
- The Technical MIP Template is located at **[Technical-MIP-Template.md](Technical-MIP-Template.md)**. This template is considered ratified once this MIP moves to Accepted status.
---    

### MIP0c8: MIP0 Domain Role Dependencies


The MIPs Framework depends on these types of Domain Roles:
-   **MIP Editor(s):** Enforces the administrative and editorial aspects of the overall MIPs process and program. The expectation is that the program will start out with an interim editor from the Maker Foundation and that others will join later.
-   **Specific authority of the MIP Editor(s) in MIP0 processes:**
	-   The MIP Editor(s) controls phase 2 of the MIP lifecycle and can assign MIP numbers
	-   The MIP Editor(s) is an admin on the MIPs Github repository
	-   The MIP Editor(s) is a moderator on the MIPs Discourse forum
	-   The MIP Editor(s) is responsible for updating the status of MIPs, as described in MIP0c4 “The MIP Lifecycle”.
-   **Governance Facilitator:** Operates voting frontends, runs governance meetings and accepts MIPs that are ready to be included in the Governance Cycle and thus, voted on.
-   **Specific authority of the Governance Facilitator in MIP0 processes:**

	-   Consensus from all governance facilitators controls phase 6 of the MIP lifecycle, which allows them to, with consensus, add valid MIPs to the inclusion poll of the next governance cycle, moving them from phase 5 (formal submission) to phase 7 (governance cycle).

Personnel may be added to these roles using a MIP0c10 sub-proposal.
Personnel may be removed from these roles using a MIP0c11 sub-proposal.

---
### MIP0c9: Core Personnel Role List 

This list can be amended through the core personnel onboarding (MIP0c12) and offboarding components (MIP0c13) of MIP0.

Entries into this list should follow the following template:

```
- Person Name: The name of the person in the core role.
	- Sub-proposal Number (MIP0c12-SP): #
	- Core Role: The core role in which the person operates.
	- Date Added: <date in (yyyy-mm-dd) format>
```

**Active Core Personnel List:**

1. **Governance Facilitators:** 

- **Person Name:** Richard Brown
    - **Sub-proposal Number (MIP0c12-SP):** N/A (Governance Facilitator was ratified prior to the MIPs process. Reference: [Mandate: Interim Governance Facilitators](https://forum.makerdao.com/t/mandate-interim-governance-facilitators/264))
    - **Core Role:** Governance Facilitator
    - **Date Added:** 2019-09-09 ([Poll: Ratify the Interim Governance Facilitator Mandate](https://vote.makerdao.com/polling-proposal/qmvh4z3l5ymqgtfs6tifq3jpjx5mxgdfnjy6alewnwwvba))

- **Person Name:** LongForWisdom
    - **Sub-proposal Number (MIP0c12-SP):** 2
    - **Core Role:** Governance Facilitator
    - **Date Added:** 2020-05-28 [Ratification Vote: Officially Ratify the MIP0c12-SP2 Subproposal for Onboarding a Second Governance Facilitator](https://mkrgov.science/executive/0x9713187b6d7c8d54ac041efdbac13d52c2120fb9)

2. **MIP Editors:**

-  **Person Name:** Charles St.Louis
	- **Sub-proposal Number (MIP0c12-SP):** 1
	- **Core Role:** MIP Editor
	- **Date Added:** 2020-05-02 ([Ratification Vote](https://vote.makerdao.com/executive-proposal/lower-usdc-sf-add-wbtc-ratify-the-initial-mips-and-subproposals))

---

### MIP0c10: MIP Editor Role  


**Responsibilities**

The MIP Editor enforces the administrative and editorial aspects of the overall MIPs process and framework. This includes:
-   Maintain and manage mips.makerdao.com.
-   Provide feedback and have discussions in the MIP section of forum.makerdao.com (ex: helping vet proposal ideas).
-   MIPs processing.
-   Management and organization of MIP and Subproposal Preambles. 
-   Onboard and vet new MIP Editors.
-   Enforcing the proper MIPs process with responsibilities such as:
    -   Confirm that the title accurately describes the content of the proposal.
    -   Confirm there is a (real) dedicated author, coordinator, funder and/or sponsor, etc. of the MIP.
    -   Assign proposed MIP's formal number labels.
    -   Change MIP statuses.
    -   Correct MIP category placement.
    -   Correspond with MIP authors/coordinators.
    -   Review the MIP for obvious defects in the language (format, completeness, spelling, grammar, sentence structure) and that it follows the style guide (template). MIP Editors are allowed to correct problems themselves, but are not required to do so and can send comments to authors to improve it themselves.
    -   Work and communicate with Governance Facilitators on coordinating governance and executive votes in relation to MIPs and the governance cycle.

    

**Selection Criteria**
    
The following criteria should be used when selecting a MIP Editor:

-   A complete understanding of the MIPs Framework
-   Knowledge share will occur when onboarded but the candidate must be very familiar with the framework and how other improvement proposal frameworks operate.
-   Required to be a community member for some time. This can be shown through various proof of participation methods, such as:
    -   Past forum posts
    -   Attendance of community and governance calls
    -   Articles written about Maker or Dai
-   Familiarity with the technical inner workings of the Maker Protocol (bonus)
-   Experience with Github
    -   Merging, editing, closing Pull Requests
    -   Addressing issues
    -   Adding tags / labels
-   Experience with the Markdown language
    -   MIPs will be written in Markdown, so editors will need to be familiar with the language. 

**Addition**

Once a person has been onboarded to the MIP Editor role, they will be added to Github and subscribed to watching the MIP repository. They will also become a moderator in the MIPs Rocket.Chat Channel and the MIPs Forum. Much of the correspondence regarding MIPs will be handled through GitHub as well in the MakerDAO forums.


**Removal**

A MIP Editor should be considered for removal if they are:
    
-   Not adequately performing their defined duties
-   Absent from their duties for a prolonged period
-   Displaying biased or malicious behaviour
-   Expressing unwillingness to continue in their role.

The removal process begins once the community has agreed on the reasoning for removal. This process must be communicated publicly via the forums in order to provide complete transparency. **The MIP Editor will then be removed from the following channels:**

-   Github
-   RocketChat
-   Forums

---

### MIP0c11: Governance Facilitator Role

**Responsibilities**

The Governance Facilitator's responsibilities are defined as the following:

Core Responsibilities
- Responsible for ensuring the health and integrity of communication channels that are used for communication within MakerDAO. These tasks include moderation duties, establishing processes and social norms, and defending the channels from trolling and Sybil attacks.
- Required to remain neutral and objective on issues outside the governance domain and focus on policy, procedure and facilitation.
- Required to schedule, run and moderate weekly governance and risk meetings from a position of neutrality.
- Required to manage and run governance processes as directed by relevant Accepted MIPs or MIP sets. 
- Required to create on-chain polls on the ‘official’ voting frontend as directed by governance processes defined in relevant Accepted MIPs or MIP sets.
- Should aim to foster a culture of openness, receptiveness and reasoned discussion within the community.
- Should work with the community to operate an emergency voting process to defend the system in the event of an emergency.
- Should aim to onboard and maintain at least three Governance Facilitators at all times while prioritising candidates from unrepresented geographic regions.


Encouraging Participation
- Should work to maintain and encourage healthy debate, in accordance with the guidelines outlined in the Scientific Governance and Risk Framework and the Core Foundation Principals.
- Should ensure that the upcoming governance schedule is well communicated to all stakeholders at least a week in advance.
- Should aim to promote and increase engagement by stakeholders in the governance process. 
- Should ensure that new members of the community understand the general level of decorum and civility expected by the group, that they have the resources they need to get onboarded quickly.

Improving Efficiency

- Should ensure that once debate reaches its natural end that appropriate consensus gathering methods take place.
- Should support and facilitate communications between the other mandated actors in the Maker Protocol.
- Should look for opportunities to streamline the governance process without sacrificing its integrity. 

Cohesion and Morale
- Responsible for raising community governance issues to the Maker Foundation or the third-party ecosystem and ensuring appropriate follow up for the community.
- Should help to build and maintain morale and engagement among members of the governance community.
- Should encourage the community to come to consensus over the least objectionable option(s) rather than treating decision-making as a competition where a subset of the community must end up disappointed in the outcome. 
- Should work to bring the governance community together on divisive topics and to prevent political polarisation and demagoguery. 

**Selection Criteria**
    
The following criteria should be used when evaluating an individual for the role of Governance Facilitator:

- Should have a complete understanding of the MIPs Framework and content, especially in relation to core governance MIPs.
- Required to be a community member for some time. This can be shown through various proof of participation methods, such as:
	- Past forum posts
	- Attendance of community and governance calls
	- Input into issues of governance in any communications venue.
- Knowledge share will occur when onboarded but the candidate must be familiar with the roles and responsibilities of Governance Facilitators.
- Should have familiarity with the technical inner workings of the Maker Protocol (bonus)
- Must have experience engaging with different stakeholders in the community in all the different venues the community uses for communications including chat rooms, forums and video conference calls.
- Should be confident in expressing themselves in each of the different venues the community uses for communications including chat rooms, forums and video conference calls.
- Should have an interest in governance mechanisms used presently and historically across the world.

**Removal**

A Governance Facilitator should be considered for removal if they are:
-   Not adequately performing their defined duties
-   Absent from their duties for a prolonged period
-   Displaying biased or malicious behaviour
-   Expressing unwillingness to continue in their role.
    
The removal process begins once the community has agreed on the reasoning for removal. This process must be communicated publicly via the forums in order to provide complete transparency. **The Governance Facilitator will then be removed from the following channels:**
-   Github
-   RocketChat
-   Forums

---

### MIP0c12: Core Personnel Onboarding

MIP0c12 is a Process MIP component that allows the onboarding of core personnel using a subproposal. MIP0c12 subproposals have the following parameters:
-   **Feedback Period**: 3 months
-   **Frozen Period**: 1 month

MIP0c12 subproposals must use the template located at  **[MIP0c12-Subproposal-Template.md](MIP0c12-Subproposal-Template.md)**. This template is considered ratified once this MIP moves to Accepted status.

---

### MIP0c13: Core Personnel Offboarding

MIP0c13 is a Process MIP component that allows the removal of core personnel using a subproposal. MIP0c13 subproposals have the following parameters:

-   **Feedback Period**: 0 days
-   **Frozen Period**: 0 days

MIP0c13 subproposals must use the template located at  **[MIP0c13-Subproposal-Template.md](MIP0c13-Subproposal-Template.md)**. This template is considered ratified once this MIP moves to Accepted status.

---
