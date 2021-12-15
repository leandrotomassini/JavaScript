const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $ ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);


const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money: ${saveCoins}`);
    }
    return countCoins;
}