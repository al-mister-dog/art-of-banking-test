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
      `So far we have looked at the difference between cash and deposits, and how deposits are the 
    liability of the bank and the asset of the customer. A customer can transfer these deposits
    to another customer. What they are transfering is not cash but deposits i.e. a transfer of
    the claim on a bank to cash money. `,
      `At this point in the course we are only concerned with the transfer of deposits between 
    account holders at the same bank. With this in mind we can create a simple picture of what
    happens to all balances (of the bank and the two customers) when a transfer takes place. 
    On the balancesheets, there is a decrease in Customer One's account, and an increase in 
    Customer Two's account. For the bank there is no change in the amount of deposits that it
    ultimately owned. If both customers have $50 in their account and Customer One transfers 
    $20 to Customer Two, the bank still owes $100. No change has occured. `,
      `As far as the bank is concerned, this is an ideal situation, because it does not need to
    worry about where it is going to get extra funds from to make good on its promise to pay.
    Later when we deal with transfers between customers with accounts at different banks, we 
    will see that this becomes are more complicated situation for both banks.`,
    ],
    assignment: `Here we have a bank with two customers, who have $100 in cash ready to be deposited at the bank. Watch what happens to the bank’s balance sheet and the customers' accounts when they transfer their money to eachother.`,
  },
  step4: {
    lectureTitle: `fundamentals`,
    title: `Credit and Overdrafts`,
    paragraphs: [
      `In the real world, deposit transfers are the main form of retail purchase and 
      most people are happy with receiving deposits in their accounts as payment. Shops
      that only accept cash are becoming rarer and rarer. Cash and deposits are almost interchangeable.
      So when does the difference between these two types of money become more apparent?`,
      `
      One of the main differences can be seen with overdrafts. If a pair of shoes costs $100 and
      a customer has only $50 cash, it would be impossible to buy these shoes if cash were the only
      form of money available. However, in a world with deposits, a customer can instead buy the shoes using their 
      debit card, and instead of the bank refusing the purchase they will allow the customer to run 
      a negative balance on their deposit account. This negative balance is called an overdraft.`,
      `What does this look like on our balance sheets? When a customer's balance is negative 
      the customer now owes the bank money. Because of this, a customer-overdraft is a liability of 
      the customer and an asset of the bank. For the bank, an overdraft represents money that they 
      will receive from the customer in the future. This can be paid back either in cash or through 
      someone else transfering deposits into the customer's account.`,
      `An overdraft is a form of credit. Credit is simply a promise to pay at a future date, an 
      IOU. For banks, deposits are a form of credit. As we have discussed, deposits are promises 
      to pay cash on demand at a future date. Overdrafts are also a promise to pay, except this time 
      by the customer to the bank.`,
      `Because credit is just a promise to pay and not the final means of settlement, the amount 
      of credit there is depends on how much money people are willing to wait out on before calling it in. 
      Credit doesn't neccesarily rely on the amount of real money (or gold) that is lying around. Because of 
      this, the amount of credit in an economy will expand much quicker than cash can. It is quicker
      to make a promise than it is to make good on that promise, as well as the fact that physical money, 
      or gold, or even cryptocurrency takes time and effort to create. In the case of overdrafts, it is 
      up to the bank issuing the overdraft for how long this credit can expand before the money needs 
      calling in, as well as deciding whether they will charge a fee for incurring an overdraft.`,
      `We now introduce a chart below in which one line represents the amount of credit there is in a bank at 
      any given moment. The other line represents reserves, or the amount of 'real' money there is in this
      system. Lets say the bank starts with zero money. If a Customer Deposits $100 in 
      the bank, the bank owes $100 in deposits and therefore the amount of credit in the system is
      $100. There is also $100 reserves. If the customer withdraws $50, there is $50 of credit 
      in the system and $50 reserves. If a Customer deposits $100 in the bank and transfers it to another 
      customer of the same bank, the credit stays at $100. However if a customer transfers more money than is in their account, say $50, the credit 
      expands by $100 (not $50; the bank owes the other customer $50 and the first customer owes the 
      bank $100). Reserves however stay the same as no extra cash was put into the system.
      The only way to contract the amount of credit to the amount of reserves is for the customer to pay 
      back their overdraft. We will be thinking about the expansion and contraction of credit much more as we go along, but
      this is a good starting point.
      `,
    ],
    assignment: `There are two customers with the same bank, each with $100 in an account.
    Expand the credit in the system by $50 and then contract it to $0. You can alter the overdraft limit in
    the settings panel.`,
  },
  step5: {
    lectureTitle: `fundamentals`,
    title: `Loans`,
    paragraphs: [
      `Overdrafts at most tend to be around a couple of thousand dollars. But what if a customer was
      starting a business, which needed a quick injection of money to get off the ground? A bank can
      offer this customer much more deposits in the form of a loan. With a loan, a bank increases 
      a customer's deposit account on the condition that this money is paid back with interest at a 
      future date.`,
      `On our balance sheets this takes the form of an increase of customer assets and banks liabilities.
      However, because this money needs to be paid back in the future, there is also an increase of 
      bank assets and customer liabilities. An increase in both party's assets and liabilities is known
      as an expansion on both sides of the balance sheet.`,
      `In some economics circles, this is known as 'creating money from thin air', and always comes with
      an element of risk. The creation of money through loans comes with the responsibility of the parties
      involved to contract this credit down through repayment, or to allow the real money to rise and 
      meet this expansion. The amount of money rising to meet credit expansion is known as growth, and
      is often seen as the ideal consequence of credit expansion. The primary focus however is that 
      all payments are eventually settled. The idea of future settlements underpins the core mechanisms of
      finance, creating growth in economies (monetarily speaking) but must be handled carefuly as inability 
      to pay, given enough cases, can result in economic catastrophe, as seen in the financial crisis
      of 2008, in which one of the main factors was the inability to settle payments for various reasons.`,
    ],
    assignment: `Have a customer take out a loan. Is there a way for this customer to pay it back?`,
  },
  step6: {
    lectureTitle: `fundamentals`,
    title: `Constraint`,
    paragraphs: [
      `In order to try reduce the risk involved in loan creations and overdrafts etc, various 
      constraints may be put on banks, by the government or even the banks themselves. constraints
      however are also naturally imposed, due to the dual role a bank plays as a profit making 
      instution and a payments facilitator.`,
      `Because cash is in many ways seen as the final form of settlement, a bank must ensure that
      it can redeem its customers on a day to day basis. The surest way of doing this would be
      to keep all the cash deposited in a vault, in case all the customers decide to all take out
      their money at the same time. Of course, this is unlikely and the bank would like to use 
      these funds for investments elsewhere. But bank-runs can and do happen.`,
      `This then is one of many constraints a bank faces. Traditionally banks are required to keep
      a fraction of total customer deposits as reserves. For example if total customer deposits were
      $10000, a bank may be required by law to keep $2500 in reserve to meet its daily demands.`,
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
      `So far we have covered the basics of balancesheets, the difference between cash and loans, 
      loans, overdrafts, credit expansion and constraint. In the next lecture we will see what 
      happens when banks deal with these issues on a nation-wide scale, facilitating transfers
      between customers from other banks, and how these issues are simplified by introducing a 
      banker's bank, something like an overseeing authority or one big bank.`,
    ],
    assignment: `Play around with deposits, withdrawals, transfers, overdrafts and loans, as well 
    as constraints and credit expansion.`,
  },
};
