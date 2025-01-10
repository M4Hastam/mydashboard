import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
//import { Badge } from "@/components/ui/badge"

export default function TermsBlog() {
  return (
    <div className="bg-background min-h-screen py-12">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          {/* <Badge className="mb-4">Technology</Badge> */}
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-foreground">
            Terms and Conditions
          </h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="m4hastam" />
              <AvatarFallback>M4</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">M4hastam - Admin</p>
              <p className="text-sm text-muted-foreground">Published on January,10 2025</p>
            </div>
          </div>
        </header>

        <div className="space-y-6 text-foreground">
          <p className="text-lg text-justify">
            Welcome to the Terms and Conditions of "Fuck-Society". These terms govern the use of our website, which is a private and invite-only platform designed to create a secure and confidential environment for collaboration among its members. By accessing and using this platform, you agree to the following terms:
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">1. Introduction</h2>

          <p className="text-lg text-justify">
            "Fuck-Society" is a private, invitation-only platform accessible only to selected members. Our goal is to provide a safe and confidential space for members to interact and collaborate. By using this site, you acknowledge that you have read and accepted these terms and conditions.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">2. Membership and Access</h2>

          <p className="text-lg text-justify">
            Access to the site is only granted to individuals who have received an official invitation. Sharing your login information or invitation with others outside of the community is strictly prohibited. Any violation of this rule will result in immediate termination of your access.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">3. Roles and Permissions</h2>

          <p className="text-lg text-justify">
            Each member is assigned a specific role which determines the areas of the site they can access. Attempting to access areas outside of your designated role is a violation of the rules and may lead to permanent suspension of access. Changes or upgrades to roles are solely at the discretion of the site administrators.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">4. Confidentiality</h2>

          <p className="text-lg text-justify">
            Everything within "Fuck-Society" is confidential. Anything shared or posted within the platform must remain within the platform. Disclosing information, documents, or content outside the community is considered a breach of trust and will be pursued seriously.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">5. Responsible Use</h2>

          <p className="text-lg text-justify">
            The platform should only be used for its intended purposes. Any attempt to hack the system, copy content without permission, or exploit the platform in any other way is prohibited.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">6. Content Ownership</h2>

          <p className="text-lg text-justify">
            All content posted on the site belongs to either the members or the site administrators. Nothing should be copied or shared without explicit permission.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">7. Respect for Others</h2>

          <p className="text-lg text-justify">
            While "Fuck-Society" may have a provocative name, respect for members and constructive interaction is a priority. Abusive or disrespectful behavior will not be tolerated.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">8. Changes to the Terms</h2>

          <p className="text-lg text-justify">
            These terms and conditions may be updated at any time. Please check this page regularly to stay informed of any changes.
          </p>
        </div>
      </article>
    </div>
  )
}
