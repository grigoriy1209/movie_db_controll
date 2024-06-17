
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/movieSlice";


const Pagination = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.movies.page);
    const totalPages = useAppSelector(state => state.movies.pagination?.total_pages);
      const prevPage = ()=>{
          if(page>1){
              dispatch(moviesActions.getAll(page-1))

          }
      }
      const nextPage = ()=>{
          if(page < totalPages)
          dispatch(moviesActions.getAll(page+1))
      }
    return (
        <div>
            <button disabled={page===null || page<=1} onClick={prevPage}>Prev</button>
            <span>{page}</span>
            <button disabled={page===null || page >= totalPages} onClick={nextPage}>Next</button>
        </div>
    );
};

export {Pagination};
