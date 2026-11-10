
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #090914;
  color: #fff;
  min-height: 100vh;
}

.navbar {
  padding: 22px 7%;
  background: #111020;
  border-bottom: 1px solid #29233e;
}

.navbar h1 {
  font-size: 27px;
  color: #c5a3ff;
}

.navbar h1 span {
  color: #a56cff;
}

.navbar p {
  color: #aaa3bd;
  margin-top: 6px;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 25px;
}

.hero {
  padding: 65px 25px;
  text-align: center;
  background: linear-gradient(135deg, #241345, #111126);
  border: 1px solid #48316c;
  border-radius: 22px;
  margin: 25px 0 55px;
}

.tag {
  display: inline-block;
  color: #d2b7ff;
  background: #39245c;
  padding: 9px 16px;
  border-radius: 30px;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 22px;
}

.hero h2 {
  font-size: clamp(32px, 6vw, 52px);
  margin-bottom: 15px;
  background: linear-gradient(90deg, #fff, #bc91ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.hero p {
  color: #c2bbd3;
  font-size: 17px;
  line-height: 1.6;
}

.tools {
  margin-bottom: 55px;
}

.tools > h2,
.workspace h2,
.about h2 {
  font-size: 25px;
  margin-bottom: 25px;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.tool-card {
  background: #151425;
  border: 1px solid #302744;
  border-radius: 18px;
  padding: 25px;
  transition: 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
  border-color: #a56cff;
  box-shadow: 0 10px 35px #9a55ff18;
}

.tool-icon {
  font-size: 32px;
  margin-bottom: 18px;
}

.tool-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.tool-card p {
  color: #aaa5bc;
  line-height: 1.6;
  margin-bottom: 22px;
}

button {
  background: linear-gradient(90deg, #8b52e8, #b16cff);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  opacity: 0.85;
}

.workspace {
  background: #151425;
  border: 1px solid #302744;
  padding: 30px;
  border-radius: 18px;
  margin-bottom: 50px;
  min-height: 180px;
}

.workspace p,
.about p {
  color: #aaa5bc;
  line-height: 1.7;
}

.about {
  text-align: center;
  padding: 35px 10px;
}

footer {
  text-align: center;
  padding: 25px 15px;
  color: #89839d;
  background: #111020;
  border-top: 1px solid #29233e;
}

@media (max-width: 600px) {
  .container {
    padding: 16px;
  }

  .navbar {
    padding: 20px;
  }

  .hero {
    padding: 48px 18px;
    margin: 20px 0 40px;
  }

  .hero p {
    font-size: 15px;
  }

  .tool-grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    padding: 22px;
  }

  .workspace {
    padding: 22px;
  }
    }
