import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux";
import {useLocation, useNavigate,} from "react-router-dom";
import {useEffect} from "react";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const page = useAppSelector(state => state.movies.page);
    const totalPages = useAppSelector(state => state.movies.pagination?.total_pages);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const pageUrl = queryParams.get("page");
        if(pageUrl){
            dispatch(moviesActions.getAll(Number(pageUrl)))
        }
    },[dispatch, location.search])

      const prevPage = ()=>{
          if(page>1){
              dispatch(moviesActions.getAll(page-1))
              navigate(`?page=${page-1}`);

          }
      }
      const nextPage = ()=>{
          if(page < totalPages)
          dispatch(moviesActions.getAll(page+1))
          navigate(`?page=${page+1}`);
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
