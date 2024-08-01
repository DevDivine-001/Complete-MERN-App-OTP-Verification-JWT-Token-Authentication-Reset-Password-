import { Link } from "react-router-dom"
import avatar from "../assets/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
import Styles from "../Styles/Username.module.css"
export default function Username() {
  return (
    <div className="container mx-auto ">
      <div className="flex h-screen">
        <div className={Styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Divine</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting With us.

            </span>
          </div>
          <form action="" className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={Styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input type="text" placeholder="Username" />
              <button type="submit" className={Styles.btn}>Let Go</button>

            </div>
            <div className="text-center">
              <span className="text-gray-500">Not a Member <Link to="/register" className="text-red-500">Register</Link></span>
            </div>

          </form>

        </div>

      </div>
    </div>
  )
}
