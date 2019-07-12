let id = 0
let toDoId = 0



///
let checkListArr=[
'Fill out KW Greensheet',
'share/sign FYP/Mold, Wire Fraud Alert, and LBP disclosure with client.', 
'Send executed contract to Buyer',
'Send executed contract to Lender/Title (can be on same email)',
'Set up inspection',
'Send executed contract to Listing Agent and confirm inspection time', 
'Collect earnest money',
'Email copy of earnest money check to title/lending',
'Send confirmation of earnest money receipt to listing agent',
'Resolve concerns from inspection',
'Contact lender and order the appraisal ',
'Send updated copy of the contract to lending/title',
'Touch base with buyer 2-3 times while waiting for the appraisal to get back',
'Negotiate new appraisal price',
'Send updated contract to lending/title with appraisal changes',
'Clarify closing timeline with lender',
'Contact buyer/listing agent and clarify closing/possession timeline',
'Schedule the closing with title. ',
'Check all docs for signatures/initials and Dotloop checklist before submission to Broker, ',
'Submit to brokerage for approval '
]


let betterArr= checkListArr.forEach(el=>{
  let fullChecklist= []
  fullChecklist.push({
    id:++toDoId, 
    text:el, 
    isComplete:false
  })
  return fullChecklist
})



module.exports = {

  deals: [
    {
      id: ++id,
      inVault: false, 
      address: '512 N Claypool Ct VA Beach VA',
      mls: 13288899,
      price: 250000,
      contacts: [
        {
          name: 'Travis Carter',
          phone: 801339999,
          email: 'travis@firstcolonymortgage.com',
          type: 'Lender'
        },

        {
          name: "Jami Decker",
          phone: 8012234400,
          email: 'jdecker@inwesttitle.com',
          type:'Title Officer'
        },
        {
          name: 'Mark Bishop',
          phone: 8016024201,
          email: "mark@shine.com",
          type: 'Listing Agent'
        },
        {

          name: 'Alex Doss',
          phone: 8012239999,
          email: 'alex_doss_42_@bob.com',
          type: "Buyer"
        },
      
      ],

      checklist: betterArr

    },
    {
      id: ++id,
      inVault:false, 
      address: '123 Fake Street',
      mls: 6669,
      price: 250000,
      contacts: [
        {

          name: 'FARTS',
          phone: 801339999,
          email: 'YEETYBOI69@texas.gov',
          type: 'Lender'
        },

        {
          name: "Jami Decker",
          phone: 8012234400,
          email: 'jdecker@inwesttitle.com',
          type:'Title Officer'
        },
        {
          name: 'Jeff Tenor',
          phone: 8016024201,
          email: "yay@yay.com",
          type: 'Listing Agent'
        },
        {

          name: 'YEET',
          phone: 8012239999,
          email: 'alex_doss_42_@bob.com',
          type: "Buyer"
        },
      
      ],

      checklist: [
        {
          id: ++toDoId,
          text: 'Collect Earnest Money',
          isComplete: false,

        },
        {
          id: ++toDoId,
          text: 'Yell at agent',
          isComplete: false,

        },
        {
          id: ++toDoId,
          text: 'Order Appraisal',
          isComplete: false,

        },
      ]

    },
    {
      id: ++id,
      inVault: true, 
      address: '648 S 500 W Provo UT',
      mls: 13289,
      price: 250000,
      contacts: [
        {
          name: 'Marsha Justice',
          phone: 8014431155,
          email: 'marsha@kw.com',
          type: 'Lender'
        },

        {
          name: "Jami Decker",
          phone: 8012234400,
          email: 'jdecker@inwesttitle.com',
          type:'Title Officer'
        },
        {
          name: 'Mark Bishop',
          phone: 8016024201,
          email: "mark@shine.com",
          type: 'Listing Agent'
        },
        {

          name: 'Andrew',
          phone: 8012239999,
          email: 'alex_doss_42_@bob.com',
          type: "Buyer"
        },
      
      ],

      checklist: [
        {
          id: ++toDoId,
          text: 'Collect Earnest Money',
          isComplete: false,

        },
        {
          id: ++toDoId,
          text: 'Yell at agent',
          isComplete: false,

        },
        {
          id: ++toDoId,
          text: 'Order Appraisal',
          isComplete: false,

        },
      ]

    },
    
  ]

}



