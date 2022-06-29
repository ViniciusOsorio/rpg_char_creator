import React, {useEffect, useState} from 'react';
import {
    OuterWrapper,
    ImgWrapper,
    ImgDiv,
    TextDiv,
    StyledDescription,
    StyledTitle
} from './CardStyled'

const Card = (props) => {

    const [title, setTitle] = useState('Teste');
    const [description, setDescription] = useState('')

    const rArray = ['Human', 'Elf', ]

    useEffect(() => {
        const setCardText = () => {
            switch (props.rId){
                case 0:
                    setTitle('Human')
                    setDescription(
                        `A short-lived species, without any particular special trait.`+
                        ` They're well-rounded enough to do well at any role.`
                    )
                    break;
                case 1:
                    setTitle('Elf')
                    setDescription(
                        `An agile and fair species, though somewhat fragile.`+
                        ` Their sharp eyes and arcane proficiency make them great for ranger and mage roles.`)
                    break;
                case 2:
                    setTitle('Dwarf')
                    setDescription(
                        `A robust and strong species, albeit slow and somewhat clumsy.`+
                        ` Their physical strenght and resistance are essential for any warrior.`
                    )
                    break;
                case 3:
                    setTitle('Halfling')
                    setDescription(
                        `The shortest species. Somewhat weak but as agile as an elf and proficient in stealth.`+
                        ` Easily the best choice for playing as a rogue.`
                    )
                    break;
                default:
                    console.log('Invalid rId')
            }

            switch (props.cId){
                case 0:
                    setTitle('Warrior')
                    setDescription(
                        `Class proficient in heavy-to-medium melee weapons, shields, hand-to-hand combat and heavy armor.`+
                        ` Fights at the frontlines and enjoys doing so.`
                    )
                    break;
                case 1:
                    setTitle('Ranger')
                    setDescription(
                        `Class proficient in ranged weapons, medium melee weapons and medium armor.`+
                        ` Prefers to fight from a distance, but will join the frontlines if needed, though they must do so carefully.`
                    )
                    break;
                case 2:
                    setTitle('Mage')
                    setDescription(
                        `Class proficient in magic.`+
                        ` Though it can wreak havok upon any enemy from a distance, they must be cautious against any opponent that would challange them directly.`
                    )
                    break;
                case 3:
                    setTitle('Rogue')
                    setDescription(
                        `Class proficient in light weapons and medium armor.`
                        +` They prefer to only strike when they have surprise in their favor. Fairly fragile, they should avoid direct combat at all costs.`
                    )
                    break;
                default:
                    console.log('Invalid cId')
            }
        }
        setCardText();
    }, 
    [])    

    return(
        <OuterWrapper 
            totalHeight={props.totalHeight} 
            totalWidth={props.totalWidth}
            marginLeft={props.marginLeft}
            marginRight={props.marginRight}
            isSelected={props.isSelected}
            onClick={props.onClick}
        >
            <ImgDiv
                imgHeight={props.imgHeight}
                imgWidth={props.imgWidth}
            >
                <ImgWrapper/>
            </ImgDiv>
            <TextDiv>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription isSelected={props.isSelected}>{description}</StyledDescription>
            </TextDiv>
        </OuterWrapper>
    )
}

export default Card