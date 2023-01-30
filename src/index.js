import "./css/style.css"; //importing css


const modal = document.querySelector(".modal");
const span = document.querySelector(".close");

const messagePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(modal.style.display = "block");
      }, 6000);
    });
  };

const solving = async() => {
    let result = await messagePromise();
    return result
}

  solving();
  
  span.style.cursor = "pointer";

  span.addEventListener("click", () => {
    modal.style.display = "none";
  })

