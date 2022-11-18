import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { getCharactersTC } from '../../redux/brBadReducer';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import BrBad from './BrBad';
import CharacterItem from './CharacterItem';


const BrBadContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharactersTC(pageSize, currentPage))
    }, [])
    const characters = useSelector(state => state.BrBad.characters);
    const charactersCount = useSelector(state => state.BrBad.charactersCount);
    const pageSize = useSelector(state => state.BrBad.pageSize)
    const currentPage = useSelector(state => state.BrBad.currentPage)
    const isFetching = useSelector(state => state.BrBad.isFetching)
    // debugger;

    const charactersEl = characters.map(c => <CharacterItem nickname={c.nickname} img={c.img} name={c.name} birthday={c.birthday} />)

    const onPageChanged = (pageSize, currentPage) => {
        dispatch(getCharactersTC(pageSize, currentPage))
    }

    return (
        <>
            {isFetching
                ? <Preloader />
                :
                <>
                    <Paginator
                        charactersCount={charactersCount}
                        pageSize={pageSize}
                        onPageChanged={onPageChanged}
                        currentPage={currentPage}
                    />
                    <BrBad characters={charactersEl} />
                </>
            }
        </>
    );
};

export default compose(
    withAuthNavigate
)(BrBadContainer)