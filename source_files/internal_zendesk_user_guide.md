___
## Why Zendesk?
___

Diskover has partnered with [Zendesk](https://diskoverdata.zendesk.com/) to enhance our customer support experience. This collaboration and AI-powered platform brings you:

- **Streamlined Support**: Access our knowledge base and submit tickets through a user-friendly interface.
- **Faster Resolution**: The rich information contained in ticket submission allows for quick routing and resolution.
- **Self-Service Options**: Find answers quickly with an extensive, searchable knowledge base.
- **Diskover Community**: Share, learn, and connect with other awesome Diskover users.

___
## Views Overview
___


| **Support** | Support Tickets | Workspace for tickets management: view, assign, status |
| **Guide** | Knowledge Base | Where to see, add, edit, and manage all help articles |
| **Gather** | Diskover Community forum | Where users can post and request features |
| **Chat** | Live Chat and Messaging | Not currently in use |
| **Talk** | Voice | Not currently in use |
| **Explore** | Reporting and Analytics | No custom report at the moment, standard reports only for now |
| **Sell** | Sales CRM | Not currently in use |


___
## Support | Tickets Management
___




___
## Guide | Knowledge Base Management
___



Articles, Sections, Categories




___
## Gather | Diskover Community 
___


___
## Terminology
___



















___
## Terminology
___

Requester: Who put in the ticket, this can be edited by the agent or filled in manually and allow someone to submit a ticket on behalf of someone. As much as possible we want to limit the number of tickets Requested by Levels Beyond (that aren’t internal tickets) so it is encouraged that if the ticket is about a client it should come from the client so it’s associated with their org.

Assignee: Group and Agent the ticket is assigned to, Zendesk is permissioned around this to a degree so the Partner managed group can only see what is assigned to their Group.
CCs: This one is pretty self explanatory, we add CCs here just like in email, the one call out is we sometimes see a user sending an internal message, sometimes this can be fixed by adding them here as a CC, other times Zendesk routes emails funny as if the user is using a service outside of their standard email.

Sharing: We don’t use this and I just haven;t gone hunting to see if I can remove it.

Tags: These don’t need to be interacted with and form naturally as you answer the different fields, you can dive into this with the Tag option to see the Tag Cloud it creates. The only time we add to this is when submitting a Feature Request, make sure that tag is included and it goes straight to the Product Board.

Resolution Code: The intent of this option is for the Agent to categorize what the issue was so when we look at reporting we can group issues together and see where we spend the majority of our time - we want this to be specific, but not too specific and ideally we don’t want to update it frequently as it would add new metrics into the reporting. The other note is we set this up with nested options so we could split Implementation and Support answers, there is overlap in the responses as a result but still shows which team is doing what.

Priority: This field correlates directly with our SLAs and the timers setup in the system around them. The more we leverage this field and work to identify the priority level when a ticket comes in the more we can balance the workload and ensure we hit our contractually obligated metrics. This will be covered more in depth in the ‘SLAs’ section.

Environment/Application: Same concept as Resolution Code here, what component of our application does this issue affect, it’s a multi-picklist field so encourage adding whatever makes sense. This field should be kept up to date as we expand and look to add more micro services and distributed systems so we can pinpoint what components we see the most ticket activity around.

Impact: This field is aimed at End-Users and is meant to help gather a sense of how severe the issue is to the client. Since this field is only available to End-Users who use the Zendesk app it’s frequently left blank on submission and is not required from an Agent standpoint.
Expected Behaviour: Targeted at End-Users to try and gather: “How is it supposed to work?” Since this field is only available to End-Users who use the Zendesk app it’s frequently left blank on submission and is not required from an Agent standpoint.

Observed Behaviour: Targeted at End-Users to try and gather: “What is it actually doing?” Since this field is only available to End-Users who use the Zendesk app it’s frequently left blank on submission and is not required from an Agent standpoint.

Steps to Reproduce the Issue: Targeted at End-Users to try and gather: “How do we make it do the thing?” Since this field is only available to End-Users who use the Zendesk app it’s frequently left blank on submission and is not required from an Agent standpoint.

Environmental Changes: Targeted at End-Users to try and gather any potential changes around the system that may be impacting or causing this issue. Since this field is only available to End-Users who use the Zendesk app it’s frequently left blank on submission and is not required from an Agent standpoint.

Azure Bug Case: At the time of setting this up there was no good integration for Zendesk to Azure like we used to use in Jira to help us connect the two when we had bugs to report. We use this field to help gather the bug URL or number so we can easily reference back to it, it’s marked as required for Agents so we don’t forget when closing a ticket - annoying when there’s no bug but great when there is and you forgot to snag the ticket number.

Level of Effort: This field was designed to give us an idea of complexity and how difficult certain tasks are. Since we don’t do Tier 1-4 and re-assign tickets as they get bumped up the chain this was our best way of tracking complexity. I don’t frequently track metrics across this field and it’s probably the easiest thing to remove from tickets at this stage.

Hours: Similar to LoE, I wanted a rough idea of how many hours we spent on tickets mostly as a tool to help us when doing time entry. This was implemented well before I started to use Zendesk Explore and at this point could easily be deprecated in favor of tracking overall time to completion of a ticket.

Premium Support: This check box is set by a trigger, using our SLA metrics if a Premium client sends in a ticket this box auto checks so the Agent immediately knows it’s a Premium Client. In the grand scheme of things it was my plan to use this field to automate after hours responses to non-premium clients but doing this also comes with some drawbacks (namely client experience) and every time i’ve mentioned it we aren’t quite there yet.

Does documentation exist for this issue: This field is the newest addition and was part of our ongoing documentation efforts the goal behind it being to pull a report of tickets where “needs to be documented” is checked so we can create new tasks based around what has come up recently in tickets.
![image](https://github.com/user-attachments/assets/580dbdb0-1516-42ae-873a-2f48b734d79a)










  
___
## Create a Zendesk Account

Creating an account is unfortunately unavoidable, but will only take a few minutes.

### Step 1 | Sign Up

🔴 &nbsp;Go to [https://diskoverdata.zendesk.com/](https://diskoverdata.zendesk.com/) and click on **Sign up**:

![Image: Zendesk Sign Up](images/zendesk_account_creation_step1.png)
