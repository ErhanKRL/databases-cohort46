const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'transactions',
});

const execQuery = util.promisify(connection.query.bind(connection));

async function makeTransaction() {
  try {
    await execQuery("START TRANSACTION");

    const transferAmount = 1000.00;
    const senderAccountNumber = 101;
    const receiverAccountNumber = 102;

    const senderBalanceResult = await execQuery('SELECT balance FROM account WHERE account_number = ?', [senderAccountNumber]);
    const senderBalance = parseFloat(senderBalanceResult[0].balance);

    if (senderBalance < transferAmount) {
      throw new Error('Insufficient balance!');
    }

    await execQuery('UPDATE account SET balance = balance - ? WHERE account_number = ?', [transferAmount, senderAccountNumber]);

    await execQuery('UPDATE account SET balance = balance + ? WHERE account_number = ?', [transferAmount, receiverAccountNumber]);

    const senderRemark = 'Transfer to account ' + receiverAccountNumber;
    const receiverRemark = 'Transfer from account ' + senderAccountNumber;

    await execQuery('INSERT INTO account_changes (account_number, amount, remark) VALUES (?, ?, ?), (?, ?, ?)', 
      [senderAccountNumber, -transferAmount, senderRemark, receiverAccountNumber, transferAmount, receiverRemark]);

    await execQuery("COMMIT");
    console.log('Transaction completed successfully!');
  } catch (error) {
    console.error('Transaction aborted:', error);
    await execQuery("ROLLBACK");
  } finally {
    connection.end();
  }
}

makeTransaction();
