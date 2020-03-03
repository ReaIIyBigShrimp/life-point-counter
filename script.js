var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
          playerOneScore: 8000,
          playerTwoScore: 8000,
          mainValue: 0
        },
        methods: {
          increaseP1Score: function(amount) {
            this.playerOneScore = this.playerOneScore + amount;
          },
          decreaseP1Score: function(amount) {
            this.playerOneScore = this.playerOneScore + amount;
          },
          // Append integer
          addValue: function(value) {
            this.mainValue = this.mainValue.toString() + value.toString();
          },
          clearValue: function() {
            this.mainValue = 0;
          }
        }
      })

      let decreaseP1LifePoints = (amount) => {
        app.data.playerOneScore -= amount;
      };

      // Add button event listeners
      // Add text input fields
        // With validation for numbers only