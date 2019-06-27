let id = 0
let toDoId = 0
//each object in the array represents a deal
module.exports = {

  deals: [
    {
      id: ++id,
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