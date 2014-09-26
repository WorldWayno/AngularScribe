using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularScribe.Startup))]
namespace AngularScribe
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
