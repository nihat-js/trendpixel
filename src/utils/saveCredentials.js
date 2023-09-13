export function saveCredentials(obj,keep = false){
  for (let key in obj){
    keep ? localStorage.setItem(key,obj[key]) : sessionStorage.setItem(key,obj[key])
  }
}