function cramer() {
    const A = [
      [parseFloat(document.getElementById('r1x1').value), parseFloat(document.getElementById('r1x2').value), parseFloat(document.getElementById('r1x3').value)],
      [parseFloat(document.getElementById('r2x1').value), parseFloat(document.getElementById('r2x2').value), parseFloat(document.getElementById('r2x3').value)],
      [parseFloat(document.getElementById('r3x1').value), parseFloat(document.getElementById('r3x2').value), parseFloat(document.getElementById('r3x3').value)]
    ];
  
    const b = [
      parseFloat(document.getElementById('e1').value),
      parseFloat(document.getElementById('e2').value),
      parseFloat(document.getElementById('e3').value)
    ];
  

    if (A.some(row => row.some(val => isNaN(val))) || b.some(val => isNaN(val))) {
      alert('Please enter valid numbers for all input values.');
      return;
    }
  
    const detA = A[0][0] * (A[1][1] * A[2][2] - A[2][1] * A[1][2]) - A[0][1] * (A[1][0] * A[2][2] - A[2][0] * A[1][2]) + A[0][2] * (A[1][0] * A[2][1] - A[2][0] * A[1][1]);
  

    if (detA === 0) {
      alert('The input matrix is not invertible. Please enter a different matrix.');
      return;
    }
  
    const detX1 = b[0] * (A[1][1] * A[2][2] - A[2][1] * A[1][2]) - A[0][1] * (b[1] * A[2][2] - b[2] * A[1][2]) + A[0][2] * (b[1] * A[2][1] - b[2] * A[1][1]);
    const detX2 = A[0][0] * (b[1] * A[2][2] - b[2] * A[1][2]) - b[0] * (A[1][0] * A[2][2] - A[2][0] * A[1][2]) + A[0][2] * (A[1][0] * b[2] - A[2][0] * b[1]);
    const detX3 = A[0][0] * (A[1][1] * b[2] - A[2][1] * b[1]) - A[0][1] * (A[1][0] * b[2] - A[2][0] * b[1]) + b[0] * (A[1][0] * A[2][1] - A[2][0] * A[1][1]);
  
    const x1 = detX1 / detA;
    const x2 = detX2 / detA;
    const x3 = detX3 / detA;
  
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
    matrixElement.appendChild(document.createTextNode("Vector b: [" + b.join(", ") + "]"));
    matrixElement.appendChild(document.createElement("br"));
  

    solutionElement.innerHTML = `Solution: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}, x3 = ${x3.toFixed(2)}`;
    solutionElement.appendChild(document.createElement("br"));
  

    stepsElement.innerHTML = "Steps of the solution:";
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("det(A) = " + detA.toFixed(2)));
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("det(A1) = " + detX1.toFixed(2)));
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("det(A2) = " + detX2.toFixed(2)));
    stepsElement.appendChild(document.createElement("br"));
    stepsElement.appendChild(document.createTextNode("det(A3) = " + detX3.toFixed(2)));
    stepsElement.appendChild(document.createElement("br"));
  }
  function clearFields() {
    document.getElementById('r1x1').value = '';
    document.getElementById('r1x2').value = '';
    document.getElementById('r1x3').value = '';
    document.getElementById('e1').value = '';
    document.getElementById('r2x1').value = '';
    document.getElementById('r2x2').value = '';
    document.getElementById('r2x3').value = '';
    document.getElementById('e2').value = '';
    document.getElementById('r3x1').value = '';
    document.getElementById('r3x2').value = '';
    document.getElementById('r3x3').value = '';
    document.getElementById('e3').value = '';
    document.getElementById('matrix').innerHTML = "";
    document.getElementById('solution').innerHTML = "";
    document.getElementById('steps').innerHTML = "";
  }