import { useGetIdentity, useLogout } from "ra-core";
import ArrowIcon from "@mui/icons-material/ArrowBack";
export const UserMenu = () => {
  const { data: identity } = useGetIdentity();
  const logout = useLogout();

  return identity ? (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full mr-4">
              <img src={identity.avatar} />
            </div>
          </div>
          <div>{identity.fullName}</div>
        </div>
        <button className="btn btn-neutral btn-sm btn-square" onClick={logout}>
          <span className="sr-only">Logout</span>
          <ArrowIcon/>
        </button>
      </div>
    </div>
  ) : null;
};
