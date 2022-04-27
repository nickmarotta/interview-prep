/*
    https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/
*/


const QUARTER_TIMES_SET = new Set([0, 15, 30, 45]);

main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}


/**
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 */
function numberOfRounds(loginTime, logoutTime) {

    if(isLogoutBeforeLogin(loginTime, logoutTime)) {
        return calculateAcrossMidnight(loginTime, logoutTime);
    } else {
        return calculateNumberOfRounds(loginTime, logoutTime);
    }
    
};

function calculateNumberOfRounds(loginTime, logoutTime) {


    const roundedLogin = roundUpFifteen(loginTime);
    const roundedLogout = roundDownFifteen(logoutTime); 

    const roundedLoginMinutes = convertTimeToMinutes(roundedLogin.hour, roundedLogin.minute);
    const roundedLogoutMinutes = convertTimeToMinutes(roundedLogout.hour, roundedLogout.minute);

    const minuteDifference = roundedLogoutMinutes - roundedLoginMinutes
    const answer = minuteDifference < 15 ? 0 : Math.floor( minuteDifference / 15);

    return answer;
}

function calculateAcrossMidnight(loginTime, logoutTime) {

    const splitLogin = loginTime.split(":");

    const roundedLogout = roundDownFifteen(logoutTime); 

    const loginMinutesBeforeMidnightAsNegative = convertTimeToMinutes(parseInt(splitLogin[0]), parseInt(splitLogin[1])) - 1440 //This is the crux of login as 
    const roundedLogoutMinutes = convertTimeToMinutes(roundedLogout.hour, roundedLogout.minute);

    const minuteDifference = roundedLogoutMinutes - loginMinutesBeforeMidnightAsNegative
    const answer = minuteDifference < 15 ? 0 : Math.floor( minuteDifference / 15);

    return answer;
}



function isLogoutBeforeLogin(loginTime, logoutTime) {

    const splitLogin = loginTime.split(":");
    const splitLogout = logoutTime.split(":");

    const loginHour = parseInt(splitLogin[0]);
    const logoutHour = parseInt(splitLogout[0]);

    const loginMinute = parseInt(splitLogin[1]);
    const logoutMinute = parseInt(splitLogout[1]);


    if (loginHour === logoutHour && loginMinute > logoutMinute) {
        return true;
    } else if (loginHour > logoutHour) {
        return true;
    }

    return false;
}


function convertTimeToMinutes(hour, minute) {   
    const hoursAsMinutes = hour * 60;
    return hoursAsMinutes + minute;
}



//Return { hour: number, minute: number }
function roundUpFifteen(time) {
    const splitTime = time.split(":"); 
    const hour = parseInt(splitTime[0]);
    const minute = parseInt(splitTime[1]);

    if (QUARTER_TIMES_SET.has(minute)) {
        return  { hour, minute };
    } else if (minute < 15) {
        return  { hour, minute: 15 };
    } else if (minute < 30) {
        return  { hour, minute: 30 };
    } else if (minute < 45) {
        return  { hour, minute: 45 };
    } else {
        if(hour === 23) {
            return { hour: hour, minute: minute }
        } else {
            return { hour: hour + 1, minute: 0 }
        }
    }
}

//Return { hour: number, minute: number }
function roundDownFifteen(time) {
    const splitTime = time.split(":"); 
    const hour = parseInt(splitTime[0]);
    const minute = parseInt(splitTime[1]);

    if (QUARTER_TIMES_SET.has(minute)) {
        return  { hour, minute };
    } else if (minute > 45) {
        return  { hour, minute: 45 };
    } else if (minute > 30) {
        return  { hour, minute: 30 };
    } else if (minute > 15) {
        return  { hour, minute: 15 };
    } else if (minute > 0) {
        return  { hour, minute: 0 };
    } else {
        throw new Error("Error rounding down " + time);
    }
}

//UTILITIES 

// TESTS 
function runAllTests() {
    console.log(numberOfRounds("23:50", "23:53"));
}
