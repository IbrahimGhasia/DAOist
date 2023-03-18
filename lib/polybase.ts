import { Polybase } from "@polybase/client";

const db = new Polybase({
	defaultNamespace: "DAOist",
});

const createCollection = async () => {
	await db.applySchema(
		`
        @public
        collection Organization {
            id: string;
            name: string;
            tokenName: string;
            tokenSymbol: string;
            

            constructor(id: string, name: string, tokenName: string, tokenSymbol: string) {
                this.id = id;
                this.name = name;
                this.tokenName = tokenName;
                this.tokenSymbol = tokenSymbol;
            }
        }

        @public
        collection Members {
            id: string;
            username: string;

            constructor(id: string, username: string) {
                this.id = id;
                this.username = username;
            }
        }    
        
    `,
		"DAOist"
	);
};

createCollection()
	.then(() => console.log("Collection created"))
	.catch((err) => console.log(err));

export { db, createCollection };
