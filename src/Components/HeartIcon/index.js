import React, { useState } from 'react';

import { HiOutlineHeart } from "react-icons/hi"
import { ContainerHeart } from './styles';

function HeartIcon() {
    const [toggleIcon, setToggleIcon] = useState(false);

    return (
        <ContainerHeart
            className={toggleIcon? "active" : ""}
            onClick={() => setToggleIcon(!toggleIcon)}
        >
            <span>
                <HiOutlineHeart />
            </span>
        </ContainerHeart>

    );
}

export default HeartIcon;