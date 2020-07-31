import React from "react";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: null,
			winner: null,
			message: "",
			nextPlayerInput: "X",
			allCells: ["", "", "", "", "", "", "", "", ""],

			winning: [
				[1, 1, 1, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 1, 1, 1, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 1, 1, 1],
				[1, 0, 0, 0, 1, 0, 0, 0, 1],
				[0, 0, 1, 0, 1, 0, 1, 0, 0],
				[1, 0, 0, 1, 0, 0, 1, 0, 0],
				[0, 1, 0, 0, 1, 0, 0, 1, 0],
				[0, 0, 1, 0, 0, 1, 0, 0, 1]
			]
		};
	}

	winnerCheck = currentCells => {
		//function to compare winningcombo and winner. It will then return an x or o.
		this.state.winning.forEach(winningCombo => {
			var winner = null;
			let counter = 0;
			for (let i = 0; i < winningCombo.length; i++) {
				if (winningCombo[i] == 1) {
					if (currentCells[i] == this.state.nextPlayerInput) {
						counter++;
						if (counter > 2) {
							this.setState({
								winner: this.state.nextPlayerInput
							});
							this.setState({
								message: `${
									this.state.nextPlayerInput
								} has won the game!!!`
							});
							this.setState({
								allCells: ["", "", "", "", "", "", "", "", ""]
							});
						}
					}
				}
			}
		});
	};

	handleClick = cellId => {
		var currentCells = this.state.allCells.map(
			(element, i) =>
				this.state.allCells[i] === "" && cellId === i
					? this.state.nextPlayerInput
					: element
		);
		//
		// );
		// currentCells is identifying the cell that is clicked. compare each index to the cell clicked and assign new value from nextPlayerInput

		this.setState({ allCells: currentCells });
		this.setState({
			nextPlayerInput: this.state.nextPlayerInput === "X" ? "O" : "X"
		});
		this.winnerCheck(currentCells);
	};

	render() {
		return (
			<div className="container">
				<div className="message"> {this.state.message} </div>
				<div className="g-rows">
					<div className="cells" onClick={() => this.handleClick(0)}>
						{this.state.allCells[0]}
					</div>
					<div className="cells" onClick={() => this.handleClick(1)}>
						{this.state.allCells[1]}
					</div>
					<div className="cells" onClick={() => this.handleClick(2)}>
						{this.state.allCells[2]}
					</div>
				</div>

				<div className="g-rows">
					<div className="cells" onClick={() => this.handleClick(3)}>
						{this.state.allCells[3]}
					</div>
					<div className="cells" onClick={() => this.handleClick(4)}>
						{this.state.allCells[4]}
					</div>
					<div className="cells" onClick={() => this.handleClick(5)}>
						{this.state.allCells[5]}
					</div>
				</div>

				<div className="g-rows">
					<div className="cells" onClick={() => this.handleClick(6)}>
						{this.state.allCells[6]}
					</div>
					<div className="cells" onClick={() => this.handleClick(7)}>
						{this.state.allCells[7]}
					</div>
					<div className="cells" onClick={() => this.handleClick(8)}>
						{this.state.allCells[8]}
					</div>
				</div>
				<button
					className="clicker"
					onClick={() => window.location.reload(false)}>
					Click to reload!
				</button>
			</div>
		);
	}
}
