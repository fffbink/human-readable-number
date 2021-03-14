module.exports = function toReadable (number) {
  const units = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const tens = ['', '', ' twenty',' thirty',' forty',' fifty', ' sixty',' seventy',' eighty',' ninety']
    const big = ['', 'hundred', 'thousand', 'million', 'billion', 'trillion']
  
    let str = String(number);
  
    if(number<=19){
        if(number == 0){
          return 'zero';
        }
        return `${units[number]}`
      }
      else if(number>19 && number<100){
        return `${tens[str[0]].trim()}${' '+units[str[1]]}`.trim();
    }

      else if(number>=100&&number<=999){
        if(((Number(str[1]+str[2]))>=10) && ((Number(str[1]+str[2]))<=19)){
            return `${units[Math.floor(number/100)]+' '}${big[1]}${' '+units[Number(str[1]+str[2])]}`.trim();
        }
        return `${units[Math.floor(number/100)]+' '}${big[1]}${tens[Math.floor((number/10)%10)]}${' '+units[number%10]}`.trim();
    }
}
