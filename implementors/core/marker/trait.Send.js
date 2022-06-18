(function() {var implementors = {};
implementors["argmin"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/checkpointing/struct.FileCheckpoint.html\" title=\"struct argmin::core::checkpointing::FileCheckpoint\">FileCheckpoint</a>","synthetic":true,"types":["argmin::core::checkpointing::file::FileCheckpoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/checkpointing/enum.CheckpointingFrequency.html\" title=\"enum argmin::core::checkpointing::CheckpointingFrequency\">CheckpointingFrequency</a>","synthetic":true,"types":["argmin::core::checkpointing::CheckpointingFrequency"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/enum.ArgminError.html\" title=\"enum argmin::core::ArgminError\">ArgminError</a>","synthetic":true,"types":["argmin::core::errors::ArgminError"]},{"text":"impl&lt;O, S, I&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.Executor.html\" title=\"struct argmin::core::Executor\">Executor</a>&lt;O, S, I&gt;","synthetic":true,"types":["argmin::core::executor::Executor"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.KV.html\" title=\"struct argmin::core::KV\">KV</a>","synthetic":true,"types":["argmin::core::kv::KV"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/observers/file/struct.WriteToFile.html\" title=\"struct argmin::core::observers::file::WriteToFile\">WriteToFile</a>","synthetic":true,"types":["argmin::core::observers::file::WriteToFile"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/observers/file/enum.WriteToFileSerializer.html\" title=\"enum argmin::core::observers::file::WriteToFileSerializer\">WriteToFileSerializer</a>","synthetic":true,"types":["argmin::core::observers::file::WriteToFileSerializer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/observers/slog_logger/struct.SlogLogger.html\" title=\"struct argmin::core::observers::slog_logger::SlogLogger\">SlogLogger</a>","synthetic":true,"types":["argmin::core::observers::slog_logger::SlogLogger"]},{"text":"impl&lt;I&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/observers/struct.Observers.html\" title=\"struct argmin::core::observers::Observers\">Observers</a>&lt;I&gt;","synthetic":true,"types":["argmin::core::observers::Observers"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/observers/enum.ObserverMode.html\" title=\"enum argmin::core::observers::ObserverMode\">ObserverMode</a>","synthetic":true,"types":["argmin::core::observers::ObserverMode"]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.Problem.html\" title=\"struct argmin::core::Problem\">Problem</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::core::problem::Problem"]},{"text":"impl&lt;O, S, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.OptimizationResult.html\" title=\"struct argmin::core::OptimizationResult\">OptimizationResult</a>&lt;O, S, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::core::result::OptimizationResult"]},{"text":"impl&lt;P, G, J, H, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.IterState.html\" title=\"struct argmin::core::IterState\">IterState</a>&lt;P, G, J, H, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;J: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::core::state::iterstate::IterState"]},{"text":"impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.LinearProgramState.html\" title=\"struct argmin::core::LinearProgramState\">LinearProgramState</a>&lt;P, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::core::state::linearprogramstate::LinearProgramState"]},{"text":"impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.PopulationState.html\" title=\"struct argmin::core::PopulationState\">PopulationState</a>&lt;P, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::core::state::populationstate::PopulationState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/enum.TerminationReason.html\" title=\"enum argmin::core::TerminationReason\">TerminationReason</a>","synthetic":true,"types":["argmin::core::termination::TerminationReason"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/test_utils/struct.TestProblem.html\" title=\"struct argmin::core::test_utils::TestProblem\">TestProblem</a>","synthetic":true,"types":["argmin::core::test_utils::TestProblem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/test_utils/struct.TestSolver.html\" title=\"struct argmin::core::test_utils::TestSolver\">TestSolver</a>","synthetic":true,"types":["argmin::core::test_utils::TestSolver"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/brent/struct.BrentOpt.html\" title=\"struct argmin::solver::brent::BrentOpt\">BrentOpt</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::brent::brentopt::BrentOpt"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/brent/struct.BrentRoot.html\" title=\"struct argmin::solver::brent::BrentRoot\">BrentRoot</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::brent::brentroot::BrentRoot"]},{"text":"impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/struct.ConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::ConjugateGradient\">ConjugateGradient</a>&lt;P, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::conjugategradient::cg::ConjugateGradient"]},{"text":"impl&lt;P, L, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/struct.NonlinearConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::NonlinearConjugateGradient\">NonlinearConjugateGradient</a>&lt;P, L, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::conjugategradient::nonlinear_cg::NonlinearConjugateGradient"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.FletcherReeves.html\" title=\"struct argmin::solver::conjugategradient::beta::FletcherReeves\">FletcherReeves</a>","synthetic":true,"types":["argmin::solver::conjugategradient::beta::FletcherReeves"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibiere.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibiere\">PolakRibiere</a>","synthetic":true,"types":["argmin::solver::conjugategradient::beta::PolakRibiere"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibierePlus.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibierePlus\">PolakRibierePlus</a>","synthetic":true,"types":["argmin::solver::conjugategradient::beta::PolakRibierePlus"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.HestenesStiefel.html\" title=\"struct argmin::solver::conjugategradient::beta::HestenesStiefel\">HestenesStiefel</a>","synthetic":true,"types":["argmin::solver::conjugategradient::beta::HestenesStiefel"]},{"text":"impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/struct.GaussNewtonLS.html\" title=\"struct argmin::solver::gaussnewton::GaussNewtonLS\">GaussNewtonLS</a>&lt;L, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::gaussnewton::gaussnewton_linesearch::GaussNewtonLS"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/struct.GaussNewton.html\" title=\"struct argmin::solver::gaussnewton::GaussNewton\">GaussNewton</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::gaussnewton::gaussnewton_method::GaussNewton"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/goldensectionsearch/struct.GoldenSectionSearch.html\" title=\"struct argmin::solver::goldensectionsearch::GoldenSectionSearch\">GoldenSectionSearch</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::goldensectionsearch::GoldenSectionSearch"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/gradientdescent/struct.SteepestDescent.html\" title=\"struct argmin::solver::gradientdescent::SteepestDescent\">SteepestDescent</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::gradientdescent::steepestdescent::SteepestDescent"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/landweber/struct.Landweber.html\" title=\"struct argmin::solver::landweber::Landweber\">Landweber</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::landweber::Landweber"]},{"text":"impl&lt;P, G, L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.BacktrackingLineSearch.html\" title=\"struct argmin::solver::linesearch::BacktrackingLineSearch\">BacktrackingLineSearch</a>&lt;P, G, L, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::linesearch::backtracking::BacktrackingLineSearch"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.ArmijoCondition.html\" title=\"struct argmin::solver::linesearch::condition::ArmijoCondition\">ArmijoCondition</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::linesearch::condition::armijo::ArmijoCondition"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.GoldsteinCondition.html\" title=\"struct argmin::solver::linesearch::condition::GoldsteinCondition\">GoldsteinCondition</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::linesearch::condition::goldstein::GoldsteinCondition"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.StrongWolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::StrongWolfeCondition\">StrongWolfeCondition</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::linesearch::condition::strongwolfe::StrongWolfeCondition"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.WolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::WolfeCondition\">WolfeCondition</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::linesearch::condition::wolfe::WolfeCondition"]},{"text":"impl&lt;P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.HagerZhangLineSearch.html\" title=\"struct argmin::solver::linesearch::HagerZhangLineSearch\">HagerZhangLineSearch</a>&lt;P, G, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch"]},{"text":"impl&lt;P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.MoreThuenteLineSearch.html\" title=\"struct argmin::solver::linesearch::MoreThuenteLineSearch\">MoreThuenteLineSearch</a>&lt;P, G, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::linesearch::morethuente::MoreThuenteLineSearch"]},{"text":"impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/neldermead/struct.NelderMead.html\" title=\"struct argmin::solver::neldermead::NelderMead\">NelderMead</a>&lt;P, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::neldermead::NelderMead"]},{"text":"impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/newton/struct.NewtonCG.html\" title=\"struct argmin::solver::newton::NewtonCG\">NewtonCG</a>&lt;L, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::newton::newton_cg::NewtonCG"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/newton/struct.Newton.html\" title=\"struct argmin::solver::newton::Newton\">Newton</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::newton::newton_method::Newton"]},{"text":"impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/particleswarm/struct.ParticleSwarm.html\" title=\"struct argmin::solver::particleswarm::ParticleSwarm\">ParticleSwarm</a>&lt;P, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::particleswarm::ParticleSwarm"]},{"text":"impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/particleswarm/struct.Particle.html\" title=\"struct argmin::solver::particleswarm::Particle\">Particle</a>&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::particleswarm::Particle"]},{"text":"impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.BFGS.html\" title=\"struct argmin::solver::quasinewton::BFGS\">BFGS</a>&lt;L, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::quasinewton::bfgs::BFGS"]},{"text":"impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.DFP.html\" title=\"struct argmin::solver::quasinewton::DFP\">DFP</a>&lt;L, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::quasinewton::dfp::DFP"]},{"text":"impl&lt;L, P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.LBFGS.html\" title=\"struct argmin::solver::quasinewton::LBFGS\">LBFGS</a>&lt;L, P, G, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::quasinewton::lbfgs::LBFGS"]},{"text":"impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.SR1.html\" title=\"struct argmin::solver::quasinewton::SR1\">SR1</a>&lt;L, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::quasinewton::sr1::SR1"]},{"text":"impl&lt;R, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.SR1TrustRegion.html\" title=\"struct argmin::solver::quasinewton::SR1TrustRegion\">SR1TrustRegion</a>&lt;R, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::quasinewton::sr1_trustregion::SR1TrustRegion"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/solver/simulatedannealing/enum.SATempFunc.html\" title=\"enum argmin::solver::simulatedannealing::SATempFunc\">SATempFunc</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::simulatedannealing::SATempFunc"]},{"text":"impl&lt;F, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/simulatedannealing/struct.SimulatedAnnealing.html\" title=\"struct argmin::solver::simulatedannealing::SimulatedAnnealing\">SimulatedAnnealing</a>&lt;F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::simulatedannealing::SimulatedAnnealing"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.CauchyPoint.html\" title=\"struct argmin::solver::trustregion::CauchyPoint\">CauchyPoint</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::trustregion::cauchypoint::CauchyPoint"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.Dogleg.html\" title=\"struct argmin::solver::trustregion::Dogleg\">Dogleg</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::trustregion::dogleg::Dogleg"]},{"text":"impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.Steihaug.html\" title=\"struct argmin::solver::trustregion::Steihaug\">Steihaug</a>&lt;P, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::trustregion::steihaug::Steihaug"]},{"text":"impl&lt;R, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.TrustRegion.html\" title=\"struct argmin::solver::trustregion::TrustRegion\">TrustRegion</a>&lt;R, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["argmin::solver::trustregion::trustregion_method::TrustRegion"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()