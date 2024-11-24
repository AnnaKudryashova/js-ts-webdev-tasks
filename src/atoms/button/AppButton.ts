import './AppButton.css';

export function AppButton(text = "Default button", options?: { color : "red" | "transparent"}) {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add("button");

    if (options) {
        button.classList.add(`button--${options.color}`);
    }
    return button;
}
