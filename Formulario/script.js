'use strict'

let programmingSkillList = [ "PHP", "Mysql", "Jquery", "C#", "Javascript"];

const generateSelectProgrammingDOM= () => {
    const skillDiv = document.querySelector(".skills-list");

    const divSkill = document.createElement('div');
    divSkill.className = "skill"
    const div = document.createElement('div');
    
    const label = document.createElement('label');
    label.textContent = "Select Programming Skill:"
    
    const select = document.createElement('select');

    const button = createRemoveButton(divSkill);

    div.appendChild(label);
    div.appendChild(select);
    
    divSkill.appendChild(div);
    divSkill.appendChild(button);

    programmingSkillList.forEach( (item) => {
        const option = createSkillOption(item);
        select.appendChild(option);
    })

    skillDiv.appendChild(divSkill);
}

const createRemoveButton = (div) => {
    const button = document.createElement('button');
    button.textContent = "Remove"
    button.addEventListener('click', () => {
        removeSkill(div);
    })

    return button
}

const createSkillOption = (item) => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item

    return option
}

const removeSkill = (div) => {
    div.parentNode.removeChild(div)
}
