function luDecomposition() {
    const A = [
      [parseFloat(document.getElementById('r1x1').value), parseFloat(document.getElementById('r1x2').value), parseFloat(document.getElementById('r1x3').value)],
      [parseFloat(document.getElementById('r2x1').value), parseFloat(document.getElementById('r2x2').value), parseFloat(document.getElementById('r2x3').value)],
      [parseFloat(document.getElementById('r3x1').value), parseFloat(document.getElementById('r3x2').value), parseFloat(document.getElementById('r3x3').value)]
    ];


    if (A.some(row => row.some(val => isNaN(val)))) {
      alert('Please enter valid numbers for all input values.');
      return;
    }

    const n = A.length;
    const L = new Array(n).fill().map(() => new Array(n).fill(0));
    const U = new Array(n).fill().map(() => new Array(n).fill(0));


    for (let i = 0; i < n; i++) {

      for (let j = i; j < n; j++) {
        let sum = 0;
        for (let k = 0; k < i; k++) {
          sum += L[i][k] * U[k][j];
        }
        U[i][j] = A[i][j] - sum;
      }


      for (let j = i; j < n; j++) {
        if (i == j) {
          L[i][i] = 1;
        } else {
          let sum = 0;
          for (let k = 0; k < i; k++) {
            sum += L[j][k] * U[k][i];
          }
          L[j][i] = (A[j][i] - sum) / U[i][i];
        }
      }
    }

    const matrixElement = document.getElementById("matrix");
    const solutionElement = document.getElementById("solution");
    const stepsElement = document.getElementById("steps");


    matrixElement.innerHTML = "Matrix A:";
    matrixElement.appendChild(document.createElement("br"));
    matrixElement.appendChild(document.createTextNode(A[0].join("\t")));
    matrixElement.appendChild(document.createElement("br"));
    matrixElement.appendChild(document.createTextNode(A[1].join("\t")));
    matrixElement.appendChild(document.createElement("br"));
    matrixElement.appendChild(document.createTextNode(A[2].join("\t")));
    matrixElement.appendChild(document.createElement("br"));


    solutionElement.innerHTML = "L matrix:";
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createTextNode(L[0].join("\t")));
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createTextNode(L[1].join("\t")));
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createTextNode(L[2].join("\t")));
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createTextNode("U matrix:"));
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createTextNode(U[0].join("\t")));
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createTextNode(U[1].join("\t")));
    solutionElement.appendChild(document.createElement("br"));
    solutionElement.appendChild(document.createTextNode(U[2].join("\t")));
    solutionElement.appendChild(document.createElement("br"));


    stepsElement.innerHTML = "Steps:";
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("1. Set L matrix diagonal elements to 1"));
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("2. Calculate U matrix values"));
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("3. Calculate L matrix values"));
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("4. Repeat steps 2-3 for all rows"));
    stepsElement.appendChild(document.createElement("br"));
  }

  function clearFields() {
    document.getElementById('r1x1').value = "";
    document.getElementById('r1x2').value = "";
    document.getElementById('r1x3').value = "";
    document.getElementById('r2x1').value = "";
    document.getElementById('r2x2').value = "";
    document.getElementById('r2x3').value = "";
    document.getElementById('r3x1').value = "";
    document.getElementById('r3x2').value = "";
    document.getElementById('r3x3').value = "";
    document.getElementById('e1').value = "";
    document.getElementById('e2').value = "";
    document.getElementById('e3').value = "";

    document.getElementById('matrix').innerHTML = "";
    document.getElementById('solution').innerHTML = "";
    document.getElementById('steps').innerHTML = "";
  }