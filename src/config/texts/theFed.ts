export const theFedText = {
  step1: {
    lectureTitle: `The Fed`,
    title: `The Fed: Final Settlement`,
    paragraphs: [
      `The following lecture is under construction. Feel free to carry on reading it in its less
      than final form!`,
      `We have begun to understand how the banking system consists of many banks that try to act as
      if they were all part of one big bank. The reason behind this is that a healthy bank is a bank
      that can meet its daily requirements, and in order to facilitate this it is crucial that all
      other banks can meet their daily requirements. The Clearing House system was a step towards
      guaranteeing banks meet their daily requirements by creating a system in which all debts with 
      the Clearing House and not any individual bank. This system can be easily broken however because
      at the end of the day the Clearing House is liable to its members with a scarce resource.`,
      `The Federal Reserve however has the legal right to create its own liabilities, which means
      theoretically it can not run out of money. This greatly eases the facilitation of the nationwide
      interbank payment system. However, this is not to say discipline does not play a factor. 
      The Fed does not simply give away money for free. Banks can run overdrafts with the Fed but this
      comes with consequences such as fees etc. To avoid overdrafts at the Fed, a bank will go to
      the Fed Funds Market in search of loans to allow that bank to carry on with its day to day 
      activities.`,
      `The Fed Funds Market consists of loans and payments made to and from all the other banks in the federal 
      banking system. These loans are reserves and involve promises to pay in return yet more Fed Funds reserves. 
      The entire Fed Funds Market is effectively an expansion of credit based on the existing money
      that is on the balance sheet of the Fed. It is important now to follow the money from balance
      sheet to balance sheet as we explore further how exactly banking works.`,
    ],
    assignment: `Sources: Stigum's Money Market - Marcia Stigum: The Federal Funds Market since the Financial Crisis - Ben Craig: New York Fed - Domestic Market Operations`,
  },

  step2: {
    lectureTitle: `The Fed`,
    title: `Daylight Overdrafts`,
    paragraphs: [
      `It is worth being reminded once more that in the federal reserve system, money transfers
      happen between the banks and the Fed, and not between the banks themselves. Lets say a customer
      from Bank A transfers money to a customer of Bank B. Bank B does not need to know whether this
      payment caused Bank A to go into their overdraft. Bank B is happy because their money came
      directly from the Fed.`,
      `In todays banking world, the majority of bank reserves in America are deposit accounts 
      at the Fed. The survival constraint says that cash inflows must be at least as large as cash outflows.
      For a bank, this constraint involves settling with the Fed by the end of the day (having a non-negative balance).
      However to avoid stifling banks from being able to make payments, the Fed allows an overdraft in the day.
      This allows to smooth out payments between banks without bouncing checks etc. At the end
      of the day this overdraft must be paid back, otherwise the Fed charges an extra fee (usually
      100 basis points over the interest rate).
      `,
      `To avoid this, banks will try to get loans from other banks to pay off their overdrafts.
      In order for a bank to lend to another bank, the lender bank must have an excess of reserves in 
      their own account. These loans still accrue interest, but they are below the interest rate, 
      (otherwise known as the Fed Funds Rate). This is beneficial for both banks, as the borrower bank is able to settle their accounts without
      incurring overdraft fees, and the lender bank has used idle reserves in order to make a profit by 
      lending them out.`,
    ],
    assignment: `Imagine that Bank 1 needs to send a payment of $10 to Bank1 (try it out). This will incur 
    an overdraft with the fed. After this get Bank 1 to take out a fed funds loan from bank 2 in order to 
    settle with the Fed. Pay attention to the credit graph as well as the color coded payments. What happens
    if you reverse the order of payments, taking out a loan with bank 2 and then transfering to bank 2? Please note that at this
    stage in the lectures, Bank Deposits and reserves are the same thing to commercial banks.`,
  },
  step3: {
    lectureTitle: `Fed Funds`,
    title: `The Fed Funds Market`,
    paragraphs: [
      `We have seen how a bank that has gone into its daylight overdraft with the Fed can 
      get a loan from another bank in order to settle this overdraft. But what does this loan
      consist of?`,
      `A bank that looks for loans in the Federal Reserve system goes into the 'Fed Funds Market'
      to do so. In this market are other banks looking to loan out reserves or looking to borrow 
      reserves. These reserves are accepted as payment to settle overdrafts with the Fed. They can
      be used as payment 'right now'. When Bank B lends to Bank A, Bank B is lending reserves. However,
      the loan that appears on Bank B's assets and Bank A's liabilities is called 'Fed Funds'. Fed
      Funds are credit, money that Bank A promises to pay the next day. Fed Funds is the money with
      which banks settle payments with other banks. They are not the liability or the asset of the 
      Fed.
      `,
      `In the previous example we saw that Bank 1 went into its daylight overdraft in order to make a payment.
      Then Bank 1 took out a loan with another bank to pay it off. In the credit chart you may have noticed
      that the credit at the Fed expanded when the bank went into its overdraft, and then the credit
      contracted when the bank took a loan to pay it off. However the credit between the lender and 
      loanee bank remained. This is called the expansion of private credit. Private credit allows banks
      flexibility in investments and payments, but private credit can sometimes expand so high that
      a financial crisis or even a crash may follow. `,
      `The Fed tries to anticipate and adjust for this using the Fed Funds Rate (in the UK the equivelent
        is the interest rate or bank rate). The federal funds rate 
      is the interest rate that banks charge each other to borrow or lend excess reserves overnight. 
      This rate is set by the Federal Open Market Committee (FOMC) and is adjusted to either encourage
      or discourage lending. The rate may be increased if the Fed wish to see less banks making risky
      investments. If the Fed Funds Rate is high then a bank may think twice about doing that 
      requires them to take a loan with another bank, as the interest on that loan will be much higher.
      Conversely the rate may be decreased during recessions to allow banks the freedom to make more
      investments and payments in order to kick start the economy.`,
    ],
    assignment: `Get banks to take out loans, get into overdrafts and settle payments. This may need
    to be preceeded by customer transfers. Also increase or decrease the Fed Funds Rate. Would you 
    take a loan out if that was the rate?`,
  },
  step4: {
    lectureTitle: `The Fed`,
    title: `Funding a Mortgage`,
    paragraphs: [
      `The funding of a mortgage loan involves banks going into the Fed Funds market to fund 
      its customers purchasing properties. Imagine I want to buy a house from you. I will do this
      by getting a mortgage loan from my bank (Citibank). We swap IOUs; Citibank promises deposits
      to make my purchase and I promise to pay a mortgage loan to Citibank after x number of years.
      Then I use these deposits to transfer the money to you in return for the deeds of your property.`,
      `Behind the scenes there is a lot going on. As we have seen in previous lessons, transfers 
      between customers of different banks involves those banks oweing each other money. Citibank 
      may not have enough deposits to cover your transfer. In this case Citibank will need to require a Fed
      Funds loan from another bank (let say HSBC). Once the reserves are in Citibank's account,
      I can go ahead and transfer the money to your bank account (you bank at Chase). This will all
      happen super quickly and under watchful eyes (I wouldn't just be able to cash out the mortgage
      loan and skip the country).`,
      `Now lets imagine at the beginning of the day that HSBC did not have the reserves to make a 
      loan to Citibank. Then it could aqquire reserves by taking a loan out from Chase. Strange as it
      sounds, in this scenario, my bank could have funded its payment to your bank with your own
      banks reserves! Such is the alchemy of banking.`,
      `One other thing to take note of is the role that HSBC has taken in this transaction. HSBC has
      become a facilitator of a transaction between two other banks. HSBC is buying and selling money
      in order to facilitate this payment. This role is called the Dealer Function, with HSBC being
      the Dealer between two banks. We will look more closeley at the Dealer Function in the next lesson.
      `,
    ],
    assignment: `I have just taken out a mortgage loan to pay you for a house. Make sure 
    my bank (Citibank) has enough funds to cover this transaction, by taking a loan out with HSBC, and get me
    to transfer funds to your bank account (with Chase). For extra credit, you could start the transaction by getting HSBC to 
    acquire funds from Chase before lending to Citibank. For extra extra credit, can you find a way
    of contracting the credit after the transfer has been completed? Hint: its down to you...`,
  },
  step5: {
    lectureTitle: `The Fed`,
    title: `Fed Funds Rate`,
    paragraphs: [
      `So far we have been trading fed funds between banks, and perhaps even setting the interest rate 
    of the fed funds. We will now look at the wider picture of these interest rates. Understanding the 
    wider picture will also help us understand another role the Fed plays outside of just facilitating payments between banks.`,
      `The interest rate of a fed funds loan is decided between the borrower and lender banks. They are decided 
      for different reasons. Because this is open market trading, every bank can see how every other bank is doing. 
      If a lender bank sees that a borrower bank has a high exposure (a large amount of liabilities), the borrower
      bank may wish to increase the interest rate on its fed funds loan to that bank. Likewise if the lender
      bank has confidence in another bank's business, they may lend at a lower price, or perhaps the lender bank
      is keen to get rid of excess reserves.`,
      `If we averaged all the different fed funds loans traded between banks we would get the Effective Federal Funds Rate (EFFR). 
    The precise rate is determined by finding the volume-weighted median rate of all fed funds loans.
    In its simplest terms, the volume-weighted median is derived by halving the amount of money traded in that day
    and taking note of the interest rate of fed funds that have been traded at that price. This gives us 
    an idea of the general trend of lending rates. The St Louis Fed gives the following example...
    `,
      `"For example, assume that on a given day, $10 billion of federal funds transactions occurred at
     each of 5, 10, 15 and 20 basis points, and $60 billion occurred at 25 basis points. This represents 
     $100 billion of total volume. The median would be the rate at the ???middle dollar???, or $50 billion, 
     which is 25 basis points in this example."`,
      `It is important to understand the Effective Federal Funds Rate for two reasons. Firstly it lets us 
      know the state of the banking system. A low EFFR may mean the economy is growing too fast and 
      is at risk of inflation. Conversely, a high EFFR may mean the economy is slowing down and is at
      risk of recession. Secondly it gives the Fed a birds-eye view of the payments system, allowing it to 
      enter the market itself in order to restore balance. In the next chapter we will see how the Fed can manipulate the EFFR by using the
      'Target Rate'.`,
    ],
    assignment: `Below we see that federal funds transactions have occured as given in the example from
    the St Louis Fed. Get the banks to trade fed funds at different interest rates in order to move the EFFR.
    `,
  },
  step6: {
    lectureTitle: `The Fed`,
    title: `Fed Funds Rate: Target`,
    paragraphs: [
      `If a bank finds that it is doing much more lending than it is borrowing, the bank stands to lose a lot of money??should the investment fail. This type of risk is called exposure. A bank can limit its exposure by increasing the interest rates on its loans. The opposite is also true; if a bank is borrowing more than it is lending then it can encourage more investors by giving loans at a lower interest rate. So the Fed Funds rate is a market rate.`,
      `Where does the Federal Reserve come into this? It is common to hear that the Federal Reserve 'sets the interest rate'. But the Fed is not a participant in the Fed Funds Market. Instead the Fed has a target rate that it influences by manipulating the quantity of reserves in the system as a whole. The underlying quantity of reserves in the Fed Funds market influences the amount of credit expansion.`,
      `The Federal Reserve can increase or decrease the money supply by performing 'open-market operations' such as participating in the Repo market. The Repo market will be covered in the next chapter, so instead we will give a simplified example using Treasury Bills. Treasury Bills are promises to pay cash from the government at a specified date in the future. They can't be spent straight away but will have accrued interest on maturity. This makes Treasury Bills a low risk investment.`,
      `Banks will purchase these Treasury Bills from the fed in exchange for their own reserves. Because reserves have gone out of the system and back into the central bank, there are fewer reserves in the system over all. Less reserves in the system as a whole means banks will be discouraged from lending their own reserves, and therefore raising their interest rates. More reserves in the system as a whole means banks will be encouraged to invest, and therefore lower their interest rates. The Federal Reserve can increase overall reserves by buying treasury bills from other banks, giving banks dollar reserves, which they can now lend in the Fed Funds market. `,
      `To conclude this chapter it is worth pointing out that so far, these loans are unsecured, meaning that there's no guarantee that a bank will get back the reserves they lent out. In the next chapter we will cover Repurchase Agreement Loans (Repos), which are a sort of swap involving Fed Funds and Treasury Bill Securities as collateral. Repos make up a huge amount of the worlds money supply and are another crucial step in grasping the larger picture of money and banking.
    `,
    ],
    assignment: `Buy and sell treasury bills in order to manipulate the amount of reserves in the system. At this point in the building of this website, there 
    is no decision making functionality in the banks, so it is up to the user to decide whether to raise the interest target or not.
    In the next chapter, banks will start making their own decisions whether to lend or not!`,
  },
};
