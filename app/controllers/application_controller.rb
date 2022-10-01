class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  protected
    def after_sign_out_path_for(_resource)
      new_user_session_path
    end
end
