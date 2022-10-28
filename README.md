# The Art of Banking
# The Interactive App for Learning Money and Banking
The aim of this site is to provide an educational platform from which to learn finance and banking using interactive real world models of aspects of the global financial and monetary system. The model starts simple along with the content, covering deposit accounts and basic money flows, before branching out into various types of financial instruments, markets and monetary systems. Banking practices from the past are also included, such as banking in the renaissance, and the 19th century banking of New York and the City of London.

The site also includes in-depth articles on economic topics such as interest, inflation, exchange and crypto currencies, all with interactive examples to play with.

## How to use
Go to the lectures tab in the side bar and choose from various lecture chapters. A brief discussion of a certain topic is given before completing an interactive assignment, in which banks are represented by balance sheets. Clicking on a bank opens a panel where the user can choose actions such as depositing money, making transfers and taking out loans.

Graphs are included which keep track of factors relevant to the assignment, such as money supply, credit expansion, and interest rates. Also included are visual settings which render the data in various ways, such as payment notation format, and color coding. 

Each chapter has a sources section for further reading.

## Design Approach
The interactive banking models are informed by a Domain Driven Design (DDD) approach. This approach seeks to create software using concepts that have been refined by experts in a specific field. 

Art of Banking uses an approach to economics called the Money View, which sees the economy as consisting of spending-units (e.g a bank, a corporation, a customer, a government etc), whose aim to make sure their money inflows match their money outflows. These spending-units are constrained by factors such as time, liquidity, and the hierarchical nature of money. 

This way of tracking money flows also makes extensive use of double-entry book-keeping, which ilustrates how one spending-unit's asset is another spending-unit's liability. In this way every spending unit has a many-to-many relationship with every other spending-unit.

All money balances and accounts have this two-sided nature. For example, if a customer has a deposit account of $50, the $50 is an asset of the customer and a liability of the bank. However, if the account is -$50 it is a liability of the customer and an asset of the bank. Therefore, a monetary unit in accounting has at least four qualities, a negative and a positive aspect, and an asset and a liability quality.

These qualities are compounded by the fact money is hierarchical. A simple way to think about this is to take gold as the ultimate form of payment. A gold coin would also be at the top of this hierarchy. A bank note however, has been seen traditionally as a promise to pay gold at some point. Further down the hierarchy are deposits and credit, and other forms of post-poning settlement. A financial bubble can be seen as the growth of money further down the hierarchy, an expansion of credit. During a crash, this type of money is seen more clearly as 'bad money', resulting in fire-sales and bank-runs, with people scrambling to get hold of the scarcer good money.

This is just a brief description of the Money View approach, and I have attempted to represent it using a functional programming approach. Each spending unit is just an object consisting of an id, type (customer, bank etc) and ids relating to accounts. Each type of account has a collection of methods related to it. For example a loans account can be created, updated, related to, and analysed in various ways. It is the money itself rather than the spending-unit who has it that emerged as the most important unit in this model.

Global variables can effect payments interactions between spending-units. For example a reserve requirement can be increased or decreased which will effect how much a spending-unit can transfer to another spending-unit. Another example is the system variable which determines the way spending-units interact; if the system is pre-central bank, then banks becoming indebted to each other after fulfilling a customer transfer between banks. However in a central bank system, the banks do not interact with each other when it comes to payments, but rather the central bank itself, which facilitates all transfers. This however only applies to reserves. Banks interact with each all the time with other financial instruments, such as Fed Funds, Repos, and Eurodollars. These are the instruments of credit expansion. This credit expansion is in turn influenced by the central bank, who enters into open-market operations, buying and selling various financial instruments.





