export const fundamentalsText = {
  step1: {
    lectureTitle: `fundamentals`,
    title: `Banking Fundamentals: Balance Sheets`,
    paragraphs: [
      `If you have ever opened up a copy of the Financial Times you will have most probably been
    confronted with a lot of jargon and confusing graphs. Terms like LDIs, bond yields 
    and interest-rate swaps may well leave you scratching your head. Of course, his isn't 
    just some made up language, but it can be an obstacle for anyone trying to gain a better 
    understanding of how finance, economy, money and the world in general works.`,
      `This chapter aims to guide you through the esoteric world of money and banking by 
    starting the journey somewhere familiar, the local bank. We will analyse the 
    balancesheet of a bank and the balancesheet of a customer, revealing what goes on
    behind the scenes of such seemingly innocuous activities as depositing cash, making 
    transfers and running an overdraft.`,
      `Later we will build on the intuition gained in this chapter and apply it to
    activities that take place not between banks and customers, but between banks and other 
    banks. You will begin to realise that a lot of the technical practices that are 
    the subject of the Broad-Sheet papers are in fact not too different from the practices
    that take place between you and your local bank.`,
      `Hopefuly by the end of the course you should be able to read through the Financial 
    Times without having to get the dictionary out.`,
    ],
    assignment: `Sources: Allyn Young - The Mystery of Money: Money and Banking - Perry Mehrling`,
  },

  step2: {
    lectureTitle: `fundamentals`,
    title: `Balance Sheets and Bank Deposits`,
    paragraphs: [
      `Whether you are a customer, a corporation, a bank or a government, you will have 
      in-comings and out-goings. You have things that you own and things that you owe. 
      In banking, the things you own are called assets, and the things that you owe to
      others are called liabilities. For each spending-unit (a customer or a bank etc), 
      we can imagine a balancesheet representing their assets and liabilities, with assets 
      shown on the left hand side of the table, and liabilities on the right hand side of
      the table. If we take the example of a bank and customer, what are their assets and 
      liabilities?`,
      `A customer will most commonly have two types of assets. These are cash reserves and 
      deposits. We could say that the customer's cash reserves include the money in their wallet
      or any other cash to hand. They can use this money instantly to buy things like groceries etc.
      Deposits are money that a customer has in a bank, and these are also assets. There are however
      some key differences between deposits and cash. `,
      `Rather than being actual cash, deposits represent a promise by your bank to pay you cash.
      When you deposit your cash at the bank, that cash belongs to the bank, and they could spend
      it if they wished. What they give you in return is a claim on the bank, in cash, for the 
      amount of deposits you have in your account. This may seem a little pedantic, but these 
      small differences are crucial to understand as we begin to follow the many paths that money
      takes.`,
      `Deposits are an asset of the customer, yet at the same time they are a liability of the bank.
      For a bank, deposits represent the money that the bank owes you at any time, on demand. 
      It is useful to remember that "a customer's asset is a bank's liability"; this is a principal of
      double-entry bookkeeping. The cash that was given to the bank in exchange for deposits is now an
      asset of the bank. And it is useful to bear in mind that there are far more deposits than there
      is cash in circulation. If every customer at a branch wanted to redeem their deposits in cash, 
      the bank would not have the reserves to do so. This is an aspect of "fractional reserve banking",
      which in these lectures, is taken as a key feature (not a bug) of banking.`,
    ],
    assignment: `Get Customer 1 to deposit and withdraw cash into and from their bank, and take notice 
    of what changes on the customer's and the bank's balance sheets. To reset balance sheets click the
    refresh icon in the settings panel. `,
  },
  step3: {
    lectureTitle: `fundamentals`,
    title: `Deposit Transfers`,
    paragraphs: [
      `We have seen how a bank takes a customer's money and exchanges them for deposits. On the bank's balance sheet, the deposits are counted as liabilities and the cash is part of the reserves on the assets side of the balance sheet.
      We will now look at bank transfers. We transfer money when we want or have to give someone money in payment.
      Outside of the banking system we could do this by simply handing the other person cash. But inside of
      the banking system this is done by online transfer, or by check. And in this case we are not transfering cash but instead
      we are transfering the deposits from our account into their account.`,
      `So what happens in the balance sheets when customers make transfers? If a bank has two customers, both depositing £100, the bank would have £200 in reserves and £200 of deposits, which the bank owes to its customers. If Customer One transfered some of their deposits to Customer Two, no change would occur in the bank's total assets or liabilities, even though a change between the accounts of customer One and customer Two has occured.
      As we will see later, it is a different situation when customers transfer deposits to customers with a different bank account to their own.`,
    ],
    assignment: `Here we have a bank with two customers, who have 100 pounds in cash ready to be deposited at the bank. Watch what happens to the bank’s balance sheet and the customers' accounts when they transfer their money to eachother.`,
  },
  step4: {
    lectureTitle: `fundamentals`,
    title: `Credit and Overdrafts`,
    paragraphs: [
      `Credit is simply a promise to pay at a future date. I could write you an IOU on a piece
      of paper in exchange for goods or services and that would count as credit. For banks, 
      deposits are a form of credit. They are promises to pay cash on demand at a future date.
      This is often forgotten as deposit transfers are the main form of retail purchase and 
      most people are happy with receiving deposits in their accounts as payment. Cash and 
      deposits are almost interchangeable`,
      `If a customer at a bank withdraws more money than is in their account, or if they transfer
      more than is in their account to someone else, they run a negative balance. This negative
      balance is called an overdraft. In this case the customer now owes the bank. Because of this
      a customer overdraft is an liability of the customer and an asset of the bank. For the bank,
      an overdraft represents money that they will receive from the customer in the future. This 
      can be paid back either in cash or through someone else transfering deposits into their account.`,
      `Overdrafts are simply deposits, a promise to pay, except this time by the customer to the bank.
      This means that overdrafts are also a form of credit. A promise to pay at a future date.
      Because credit is just a promise to pay and not the final means of settlement, the amount 
      of credit in a system expands much quicker than cash can (cash needs to be printed etc). 
      It is up to the bank issuing the overdraft for how long credit can expand before the money
      needs calling in.`,
      `We now introduce a line chart below that represents the amount of credit is in a bank at 
      any given moment. Lets say the bank starts with zero money. If a Customer Deposits $100 in 
      the bank, the bank owes $100 in deposits and therefore the amount of credit in the system is
      $100. If the customer withdraws $50, there is $50 of credit in the system. If a Customer Deposits
      $100 in the bank and transfers it to another customer of the same bank, the credit stays at $100.
      However if a customer transfers more money than is in their account, the credit expands further.
      The only way to contract the amount of credit is for the customer to pay back their overdraft. 
      We will be thinking about the expansion and contraction of credit much more as we go along, but
      this is a good starting point.
      `,
    ],
    assignment: `Assignment: There are two customers with the same bank, each with $100 in an account.
    Expand the credit in the system by $50 and then contract it to $0. You can alter the overdraft limit in
    the settings panel.`,
  },
  step5: {
    lectureTitle: `fundamentals`,
    title: `Loans`,
    paragraphs: [
      `Just like overdrafts, loans are both a form of credit and an expansion of the balancesheet. 
      The way we think of the process of taking out a loan goes like this. A customer asks for a loan,
      and the bank provides the customer with the money under the condition that the customer pays it
      back with interest. In this model, money is moving from the bank to the customer and back to the bank.
      However for a bank the process goes more like this. A customer asks for a loan and the bank adds
      deposits to the liabilities side of the balance sheet while at the same time adding deposits to the 
      assets side of the balance sheet. The assets that have been added denote the same amount of deposits
      that are due to the bank at a future data, plus interest. `,
      `To a bank, deposits are just the promise to pay money to a customer at a future date, and are infact
      a deferment of final settlement. Because of this a bank can simply add, or create, deposits, so long
      as the bank is confident that at some point in the future they will have the means of redeeming 
      the deposits in cash. Likewise a loan means the bank is confident that a customer will one day redeem
      the loan in cash or with a deposit transfer. As we will see later, a deposit transfer into a bank represents
      a promise from some other bank of redeeming these deposits in money at a future date.`,
      `Looking at things from this perspective shows us the ability to create money out of thin air. However
      this creation comes with the responsibility of the parties involved to contract credit and make sure
      that all payments are eventually settled. The idea of future settlements underpins the core mechanisms of
      finance, creating growth in economies (monetarily speaking) but must be handled carefuly as inability 
      to pay, given enough cases, can result in financial catastrophe!`,
      ``,
    ],
    assignment: `Assignment: Have a customer take out a loan. Is there a way for this customer to pay it back?`,
  },
  step6: {
    lectureTitle: `fundamentals`,
    title: `Constraint`,
    paragraphs: [
      `Because cash is many ways seen as the final form of settlement, a bank must ensure that
      it can redeem its customers on a day to day basis. The surest way of doing this would be
      to keep all the cash deposited in a vault, in case all the customers decide to all take out
      their money at the same time. Of course, this is unlikely and the bank would like to use 
      these funds for investments elsewhere. But bank runs (the scenario illustrated in the previous
      sentence) can and do happen.`,
      `This then is one of many constraints a bank faces. Traditionally banks are required to keep
      a fraction of total Customer Deposits as reserves. For example if total Customer Deposits were
      $10000, a bank may be required by law to keep $2500 in reserve to meet its daily demands. This 
      is called fractional reserve banking.`,
      `We have seen by playing with overdrafts how credit can expand and contract. Credit expansion 
      means there is lots of investment going on, and lots of payments being made. However this 
      is a precarious position for a bank if suddenly everyone gets spooked and wants to redeem their
      deposits as cash. On the other hand, if credit doesn't expand, growth becomes much slower or 
      even impossible. The art of banking requires striking a balance between constraint and elasticity.`,
    ],
    assignment: `Change the reserve requirement and see how it effects the elasticity of the system.`,
  },
  step7: {
    lectureTitle: `fundamentals`,
    title: `Conclusion`,
    paragraphs: [
      `Because cash is many ways seen as the final form of settlement, a bank must ensure that
      it can redeem its customers on a day to day basis. The surest way of doing this would be
      to keep all the cash deposited in a vault, in case all the customers decide to all take out
      their money at the same time. Of course, this is unlikely and the bank would like to use 
      these funds for investments elsewhere. But bank runs (the scenario illustrated in the previous
      sentence) can and do happen.`,
      `This then is one of many constraints a bank faces. Traditionally banks are required to keep
      a fraction of total Customer Deposits as reserves. For example if total Customer Deposits were
      $10000, a bank may be required by law to keep $2500 in reserve to meet its daily demands. This 
      is called fractional reserve banking.`,
      `We have seen by playing with overdrafts how credit can expand and contract. Credit expansion 
      means there is lots of investment going on, and lots of payments being made. However this 
      is a precarious position for a bank if suddenly everyone gets spooked and wants to redeem their
      deposits as cash. On the other hand, if credit doesn't expand, growth becomes much slower or 
      even impossible. The art of banking requires striking a balance between constraint and elasticity.`,
    ],
    assignment: `Change the reserve requirement and see how it effects the elasticity of the system.`,
  },
};
