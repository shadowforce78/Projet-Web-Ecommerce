/**
 * Middleware d'authentification.
 * Vérifie si l'utilisateur est connecté avant d'accéder aux routes protégées.
 */
class AuthMiddleware {
  /**
   * Vérifie si l'utilisateur est authentifié.
   * Redirige vers la page de connexion si ce n'est pas le cas.
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  static isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
      return next();
    }
    res.redirect('/auth/login');
  }
}

module.exports = AuthMiddleware;
