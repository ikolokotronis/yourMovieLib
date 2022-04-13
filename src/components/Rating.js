import React, {useState} from 'react';
import {Flex, IconButton} from "@chakra-ui/react";
import {MdStarRate} from 'react-icons/md';

export function Rating() {
    const [rating, setRating] = useState(0);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating){
            stars.push(<IconButton color={'gold'}
                                   variant={'filled'}
                                   size={'1'}
                                   p={'1'}
                                   icon={<MdStarRate/>} key={i}
                                   onClick={() => setRating(i + 1)}
                                   aria-label={'star'}/>);
        }
        else{
            stars.push(<IconButton color={'gray.200'}
                                   variant={'filled'}
                                   size={'1'}
                                   p={'1'}
                                   icon={<MdStarRate/>} key={i}
                                   onClick={() => setRating(i + 1)}
                                   aria-label={'star'}/>);
        }
    }
    return (
        <Flex>
            {
                stars.map(star=>{
                    return star;
                })
            }
        </Flex>
    );
}

