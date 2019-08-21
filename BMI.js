export default class BMI{
  bmicalculate(w,h){
    return w/(h**2);
  }
  scal(bm,re){
    if(re=="western"){
      if(bm<=19.5)
        return "Under weight"
      else if(bm<=34.9)
        return "Normal weight"
      else if(bm<=39.9)
        return "Overweight"
      else
        return "Obesity"
    }
    else{
      if(bm<=18.5)
        return "Under weight"
      else if(bm<=24.9)
        return "Normal weight"
      else if(bm<=29.9)
        return "Overweight"
      else
        return "Obesity"
    }
  }
}
