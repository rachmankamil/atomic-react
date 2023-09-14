import React from "react"

import FormProductOrganism from "../component/organisms/FormProductOrganism"

const ProductFormPage = () => {
    return (
        <>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vEYQQipBpnJK30tZzyxlCwHaDT%26pid%3DApi&f=1&ipt=a26b192b94315ad780d5b67f8645f71993e0aad4e0e3d39e21d0651651addefd&ipo=images" alt="bootstrap_logo" />
            <h1>Create Product</h1>
            <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>

            <FormProductOrganism></FormProductOrganism>
        </>
    )
}

export default ProductFormPage